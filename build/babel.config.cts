import type { TransformOptions } from "@babel/core";
import { dirname, posix, relative, resolve, sep } from "path";

export default 
{
    presets: [
        "@babel/preset-typescript",
        [
            "@babel/preset-env",
            {
                targets: "> 0.25%, not dead", // Adjust according to your target environments
                useBuiltIns: false // This ensures Babel won't include polyfills
            }
        ]
    ],
    plugins: [
        [
            "module-resolver",
            {
                root: ["."],
                resolvePath: (sourcePath: string, currentFile: string) =>
                {
                    const base = dirname(currentFile);
                    const path = resolve(sourcePath);

                    const result = relative(base, path);

                    const transformedResult = result.split(sep).join(posix.sep);

                    return transformedResult;
                }
            }
        ]
    ]
} satisfies TransformOptions;
