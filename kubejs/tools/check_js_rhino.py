"""用整合包自带的 Rhino 解析 KubeJS 脚本（语法检查）。

    python kubejs/tools/check_js_rhino.py                # 检查 kubejs 下全部 .js
    python kubejs/tools/check_js_rhino.py <file> [...]   # 只检查指定文件

只验语法，不执行。变量提升顺序、名单里的错 id 这类问题要看
kubejs/docs/KJS_SCRIPT_RULES.md 里的桩测试做法。
"""
import glob
import os
import subprocess
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
KUBEJS = os.path.join(ROOT, 'kubejs')
PARSER = os.path.join(KUBEJS, 'tools', 'kjs_parse', 'KjsParse.java')


def find_rhino():
    jars = sorted(glob.glob(os.path.join(ROOT, 'mods', '*rhino*.jar')))
    if not jars:
        sys.exit('找不到 Rhino：mods/ 下没有 *rhino*.jar')
    return jars[-1]


def targets(argv):
    if argv:
        return argv
    files = []
    for root, dirs, names in os.walk(KUBEJS):
        dirs[:] = [d for d in dirs if not d.startswith('.')]
        for name in sorted(names):
            if name.endswith('.js'):
                files.append(os.path.join(root, name))
    return sorted(files)


def main():
    files = targets(sys.argv[1:])
    if not files:
        sys.exit('没有要检查的脚本')
    cmd = ['java', '-cp', find_rhino(), PARSER] + files
    result = subprocess.run(cmd, cwd=ROOT)
    sys.exit(result.returncode)


if __name__ == '__main__':
    main()
