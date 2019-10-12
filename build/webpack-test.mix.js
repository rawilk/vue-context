const mix = require('laravel-mix');

mix
    .setPublicPath('test/js/dist')
    .js('test/js/src/index.js', 'index.js')
    .sass('test/js/src/index.scss', 'index.css')
    .sourceMaps();
