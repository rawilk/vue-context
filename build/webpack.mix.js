const { mix } = require('laravel-mix');

const inProduction = mix.inProduction();

mix
	.setPublicPath('dist')
	.js('src/index.js', 'vue-context.js')
	.sourceMaps(! inProduction)
	.webpackConfig({
		output: {
			libraryTarget: 'umd',
			umdNamedDefine: true
		}
	});