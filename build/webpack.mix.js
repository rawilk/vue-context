const mix = require('laravel-mix');

mix
    .setPublicPath('dist/css')
    .sass('src/sass/vue-context.scss', 'vue-context.css');
