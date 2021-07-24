const jsfiles = ['main', 'homepage', 'productin', 'products']

const config = []
// rollup.config.js
import { terser } from 'rollup-plugin-terser'
import replace from '@rollup/plugin-replace'
import { nodeResolve as resolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import buble from '@rollup/plugin-buble'

// settings
const dev = process.env.NODE_ENV !== 'production',
	sourcemap = dev ? 'inline' : false,
	tokens = {
		__CLOCKSELECTOR__: '.clock',
		__CLOCKINTERVAL__: 1000,
		__CLOCKFORMAT__: 'formatHMS',
	}

console.log(`running in ${dev ? 'development' : 'production'} mode`)

jsfiles.forEach((nm) => {
	const watch = {
			include: './js/**',
			clearScreen: true,
		},
		input = `./js/${nm}.js`
	config.push({
		// ES5 output
		input,
		watch,
		plugins: [
			replace({
				...tokens,
				__POLYFILL__: '', // no polyfill for ES6
			}),
			resolve({ browser: true }),
			commonjs(),
		],

		output: {
			file: `./build/assets/js/${nm}.min.mjs`,
			format: 'iife',
			sourcemap: true,
			plugins: [
				terser({
					ecma: 2018,
					mangle: { toplevel: true },
					compress: {
						module: true,
						toplevel: true,
						unsafe_arrows: true,
						drop_console: !dev,
						drop_debugger: !dev,
					},
					output: { quote_style: 1 },
				}),
			],
		},
	})
})
export default config
