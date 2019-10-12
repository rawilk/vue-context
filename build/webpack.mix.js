const mix = require('laravel-mix');

const inProduction = mix.inProduction();

mix
    .setPublicPath('dist')
    .js('src/js/index.js', 'js/vue-context.js')
    .sass('src/sass/vue-context.scss', 'css/vue-context.css')
    .sourceMaps(! inProduction)
    .webpackConfig({
        output: {
            libraryTarget: 'umd',
            umdNamedDefine: true
        }
    });
