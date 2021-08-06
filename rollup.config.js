import svelte from "rollup-plugin-svelte";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import autoPreprocess  from "svelte-preprocess";
import typescript from "@rollup/plugin-typescript";
import css from "rollup-plugin-css-only";
import postcss from "rollup-plugin-postcss";
import path from "path";
import fs from "fs";

const production = !process.env.ROLLUP_WATCH;

export default fs
  .readdirSync(path.join(__dirname, "webviews", "pages"))
  .map((input) => {
    const name = input.split(".")[0];
    return {
      input: "webviews/pages/" + input,
      output: {
        sourcemap: true,
        format: "iife",
        name: "app",
        file: "out/compiled/" + name + ".js",
      },
      plugins: [
        
        css({ output: "EasyMake.css" }),
        svelte({
          css: css => css.write('out/compiled/bundel.css'),
            compilerOptions: {
              dev: !production,
              //dev,
              hydratable: true,
              css: true,
            },
            css: (css) => {
              css.write(name + ".css");
            },
            preprocess: autoPreprocess(),
            emitCss: false,
          

          // enable run-time checks when not in production
          
          // we'll extract any component CSS out into
          // a separate file - better for performance
         
        }),
        postcss({
          extensions: ['.scss', '.sass', '.css','.jpg'],
          extract: true,
          minimize: true,
          use: [
            ['sass',
             {
              includePaths: [
                './src/theme',
                './node_modules'
              ]
            }]
          ]
        }),
        resolve({
          browser: true,
          dedupe: ["svelte"],
        }),
        commonjs(),

       

        typescript({
          tsconfig: "webviews/tsconfig.json",
          sourceMap: !production,
          inlineSources: !production,
        }),

        // In dev mode, call `npm run start` once
        // the bundle has been generated
        // !production && serve(),

        // Watch the `public` directory and refresh the
        // browser on changes when not in production
        // !production && livereload("public"),

        // If we're building for production (npm run build
        // instead of npm run dev), minify
        production && terser(),
      ],
      watch: {
        clearScreen: false,
      },
    };
  });
