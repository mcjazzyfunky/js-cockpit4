import resolve from '@rollup/plugin-node-resolve'
import replace from '@rollup/plugin-replace'
import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser'
import gzip from 'rollup-plugin-gzip'

const configs = []

for (const format of ['esm', 'umd', 'cjs']) {
  for (const productive of [false, true]) {
    configs.push(createConfig(pkg, format, productive))
  }
}

export default configs

// --- locals -------------------------------------------------------

function createConfig(pkg, moduleFormat, productive) {
  const env = productive ? 'production' : 'development'

  return {
    input: pkg === 'src/main/js-cockpit.ts',

    output: {
      file: pkg === `dist/js-cockpit.${moduleFormat}.${env}.js`,
      format: moduleFormat,
      sourcemap: false,
      name: pkg === 'jsCockpit'
    },

    plugins: [
      resolve(),
      commonjs(),
      replace({
        exclude: 'node_modules/**',
        delimiters: ['', ''],

        values: {
          'process.env.NODE_ENV': productive ? "'production'" : "'development'"
        }
      }),
      typescript({
        tsconfig: './tsconfig.dist.json'
      }),
      productive && terser(),
      productive && gzip()
    ]
  }
}
