const mix = require('laravel-mix');
const fs = require('fs');
const scriptsPath = __dirname + '/../docs/scripts';

// Cleanup the old scripts, since we'll be re-hashing them.
fs.rmdirSync(scriptsPath, { recursive: true });

mix
    .js('js/basic/index.js', 'dist/vue-context-basic-demos.js')
    .js('js/advanced/index.js', 'dist/vue-context-advanced-demos.js')
    .js('js/props/index.js', 'dist/vue-context-props-demos.js')

    .copy('dist/vue-context-basic-demos.js', scriptsPath)
    .copy('dist/vue-context-advanced-demos.js', scriptsPath)
    .copy('dist/vue-context-props-demos.js', scriptsPath);
