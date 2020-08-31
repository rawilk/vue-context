const mix = require('laravel-mix');
const fs = require('fs');

// Cleanup the old scripts, since we'll be re-hashing them.
fs.rmdirSync(__dirname + '/../docs/scripts', { recursive: true });

mix
    .js('js/index.js', 'dist/vue-context-demos.js')
    .js('js/advanced/index.js', 'dist/vue-context-advanced-demos.js')

    .copy('dist/vue-context-demos.js', __dirname + '/../docs/scripts')
    .copy('dist/vue-context-advanced-demos.js', __dirname + '/../docs/scripts');
