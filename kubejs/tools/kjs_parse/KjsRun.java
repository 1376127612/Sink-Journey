import dev.latvian.mods.rhino.Context;
import dev.latvian.mods.rhino.ContextFactory;
import dev.latvian.mods.rhino.ScriptableObject;

import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Paths;

/**
 * 用事件桩跑一遍脚本回调，验「会不会抛异常、产出几条」。
 * 先执行 prelude（桩掉脚本用到的全局对象），再执行被测脚本：
 *
 *   java -cp "mods/[犀牛] rhino-2101.2.8-build.91.jar" kubejs/tools/kjs_parse/KjsRun.java prelude.js script.js
 *
 * 打印两行：log=<prelude 里 __log 数组的 JSON>、thrown=<异常或 none>。
 * 写法与原因见 kubejs/docs/KJS_SCRIPT_RULES.md §3。
 */
public class KjsRun {
    public static void main(String[] args) throws Exception {
        if (args.length != 2) {
            System.out.println("用法: java -cp <rhino jar> KjsRun.java <prelude.js> <script.js>");
            System.exit(2);
        }
        Context cx = new ContextFactory().enter();
        ScriptableObject scope = cx.initStandardObjects();
        evaluate(scope, cx, args[0]);
        String thrown = "none";
        try {
            evaluate(scope, cx, args[1]);
        } catch (Throwable t) {
            thrown = String.valueOf(t);
        }
        Object log = cx.evaluateString(scope,
            "JSON.stringify(typeof __log === 'undefined' ? [] : __log)", "log", 1, null);
        System.out.println("log=" + log);
        System.out.println("thrown=" + thrown);
    }

    private static void evaluate(ScriptableObject scope, Context cx, String path) throws Exception {
        String src = new String(Files.readAllBytes(Paths.get(path)), StandardCharsets.UTF_8);
        cx.evaluateString(scope, src, path, 1, null);
    }
}
