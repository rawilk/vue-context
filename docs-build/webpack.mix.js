const mix = require('laravel-mix');

mix.js('js/index.js', 'dist/vue-context-demos.js')
    .copy('dist/vue-context-demos.js', __dirname + '/../docs/scripts');
