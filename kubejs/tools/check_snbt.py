# -*- coding: utf-8 -*-
"""
SNBT 语法检查（宽松版）：只做一件事——确认文件能被 Minecraft 的 SNBT 读进来。

为什么不用 nbtlib：Minecraft 的 SNBT 允许省略元素之间的逗号，nbtlib 的语法要求逗号，
连原版章节文件都会被它判错，所以这里按 Minecraft 的规则写一个小解析器。

用法：
    python kubejs/tools/check_snbt.py config/ftbquests/quests/chapters/*.snbt
    python kubejs/tools/check_snbt.py config/ftbquests/quests/lang/zh_cn.snbt

退出码 0 = 全部通过；1 = 有文件解析失败。
"""
import sys

NUM_SUFFIX = "bBsSlLfFdD"


class Err(Exception):
    pass


class Snbt:
    def __init__(self, text, name="<snbt>"):
        self.s = text
        self.i = 0
        self.name = name

    def err(self, msg):
        line = self.s.count("\n", 0, self.i) + 1
        raise Err("%s:%d %s" % (self.name, line, msg))

    def ws(self):
        while self.i < len(self.s) and self.s[self.i] in " \t\r\n":
            self.i += 1

    def peek(self):
        self.ws()
        return self.s[self.i] if self.i < len(self.s) else ""

    def eat(self, ch):
        if self.peek() != ch:
            self.err("期望 %r 实际 %r" % (ch, self.peek()))
        self.i += 1

    def string(self):
        self.eat('"')
        out = []
        while self.i < len(self.s):
            c = self.s[self.i]
            if c == "\\":
                out.append(self.s[self.i:self.i + 2])
                self.i += 2
                continue
            if c == '"':
                self.i += 1
                return "".join(out)
            out.append(c)
            self.i += 1
        self.err("字符串没有闭合")

    def bare(self):
        start = self.i
        while self.i < len(self.s) and self.s[self.i] not in " \t\r\n,]}:":
            self.i += 1
        if start == self.i:
            self.err("空值")
        return self.s[start:self.i]

    def value(self):
        c = self.peek()
        if c == "{":
            return self.compound()
        if c == "[":
            return self.list()
        if c == '"':
            return self.string()
        if not c:
            self.err("文件提前结束")
        return self.bare()

    def compound(self):
        self.eat("{")
        out = {}
        while True:
            if self.peek() == "}":
                self.i += 1
                return out
            if self.peek() == ",":
                self.i += 1
                continue
            key = self.string() if self.peek() == '"' else self.bare()
            self.eat(":")
            if key in out:
                self.err("重复的键 %r" % key)
            out[key] = self.value()

    def list(self):
        self.eat("[")
        out = []
        while True:
            if self.peek() == "]":
                self.i += 1
                return out
            if self.peek() == ",":
                self.i += 1
                continue
            out.append(self.value())

    def parse(self):
        v = self.value()
        self.ws()
        if self.i != len(self.s):
            self.err("值之后还有内容")
        return v


def check(path):
    with open(path, encoding="utf-8") as f:
        text = f.read()
    return Snbt(text, path).parse()


def main(argv):
    bad = 0
    for path in argv:
        try:
            data = check(path)
            note = ""
            if isinstance(data, dict) and "quests" in data:
                quests = data["quests"]
                ids = [q.get("id") for q in quests if isinstance(q, dict)]
                short = [i for i in ids if not (isinstance(i, str) and len(i) == 16)]
                note = "，%d 个任务%s" % (len(quests),
                                        "（id 异常 %s）" % short if short else "")
            print("OK   %s%s" % (path, note))
        except Err as e:
            bad += 1
            print("FAIL %s" % e)
    return 1 if bad else 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
