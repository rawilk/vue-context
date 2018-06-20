const { mix } = require('laravel-mix');

mix
    .setPublicPath('test/js/dist')
    .js('test/js/src/index.js', 'index.js')
    .js('test/js/src/test_issue_4.js', 'test_issue_4.js')
    .sourceMaps();