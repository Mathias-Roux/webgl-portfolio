import postcss from 'rollup-plugin-postcss';
import postcssPresetEnv from 'postcss-preset-env';
import csso from 'postcss-csso';
import resolve from '@rollup/plugin-node-resolve';
import glsl from 'rollup-plugin-glsl';
import commonjs from '@rollup/plugin-commonjs';

export default {
    input: './src/scripts/app.js',
    output: {
        file: './dist/scripts/app.js',
        format: 'iife',
        name: 'app'
    },
    plugins: [
      resolve(),
      commonjs(),
      glsl(),
      postcss({
        extract: 'style.css',
        modules: true,
        plugins: [
          postcssPresetEnv({ autoprefixer: {} }),
          csso({
            restructure: true
          })
        ]
      })
    ]
}
