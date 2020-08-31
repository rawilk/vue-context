const mix = require('laravel-mix');

mix
    .js('js/index.js', 'dist/vue-context-demos.js')
    .js('js/advanced/index.js', 'dist/vue-context-advanced-demos.js')

    .copy('dist/vue-context-demos.js', __dirname + '/../docs/scripts')
    .copy('dist/vue-context-advanced-demos.js', __dirname + '/../docs/scripts');
