const mix = require('laravel-mix');

const inProduction = mix.inProduction();

mix
    .setPublicPath('dist/js')
    .js('src/js/index.js', 'vue-context.js')
    .sourceMaps(! inProduction)
    .webpackConfig({
        output: {
            libraryTarget: 'umd',
            umdNamedDefine: true
        }
    });
