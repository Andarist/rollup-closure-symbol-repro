import closure from '@ampproject/rollup-plugin-closure-compiler'

const createConfig = ({ format }) => ({
	input: 'src/index.js',
	output: {
		format,
		file: `dist/repro.${format}.js`,
	},
	plugins: [
		closure({
			compilation_level: 'SIMPLE',
			env: 'CUSTOM',
			language_out: 'ECMASCRIPT5_STRICT',
			apply_input_source_maps: false,
			use_types_for_optimization: false,
			process_common_js_modules: false,
			rewrite_polyfills: false,
			assume_function_wrapper: true,
			renaming: true
		}),
	],
})

export default [
	createConfig({ format: 'esm' }),
	createConfig({ format: 'cjs' }),
]
