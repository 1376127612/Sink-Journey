import dev.latvian.mods.rhino.Context;
import dev.latvian.mods.rhino.ContextFactory;
import dev.latvian.mods.rhino.Parser;

import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Paths;

/**
 * 用整合包自带的 Rhino（mods/[犀牛] rhino-*.jar）解析脚本，语法一律以游戏里那套引擎为准。
 * 单文件源码模式运行，不需要编译产物：
 *
 *   java -cp "mods/[犀牛] rhino-2101.2.8-build.91.jar" kubejs/tools/kjs_parse/KjsParse.java a.js b.js
 *
 * 只验语法。变量提升顺序、名单里的错 id 这类问题只有真正执行回调才会暴露，
 * 做法见 kubejs/docs/KJS_SCRIPT_RULES.md。
 */
public class KjsParse {
    public static void main(String[] args) throws Exception {
        if (args.length == 0) {
            System.out.println("用法: java -cp <rhino jar> KjsParse.java <file.js> [...]");
            System.exit(2);
        }
        Context cx = new ContextFactory().enter();
        int bad = 0;
        for (String f : args) {
            String src = new String(Files.readAllBytes(Paths.get(f)), StandardCharsets.UTF_8);
            try {
                new Parser(cx).parse(src, f, 1);
                System.out.println("OK   " + f);
            } catch (Throwable t) {
                bad++;
                System.out.println("FAIL " + f + " -> " + t.getMessage());
            }
        }
        System.out.println(bad == 0 ? "ALL PARSED" : bad + " FAILED");
        System.exit(bad == 0 ? 0 : 1);
    }
}
