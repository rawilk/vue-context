#!/usr/bin/env node

const fs = require('fs');

const filesToDelete = [
    __dirname + '/mix-manifest.json',
];

filesToDelete.forEach(file => {
    try {
        fs.unlinkSync(file);
    } catch (e) {}
});

fs.rmdirSync(__dirname + '/dist', { recursive: true });

console.log('All extra files cleaned up!');

// Add "ids" to the files for cache busting, and also update the script references in the docs
const docFiles = {
    basic: __dirname + '/../docs/demos/basic.md',
    advanced: __dirname + '/../docs/demos/advanced.md',
    props: __dirname + '/../docs/demos/props.md',
}

const scripts = {
    basic: __dirname + '/../docs/scripts/vue-context-basic-demos.js',
    advanced: __dirname + '/../docs/scripts/vue-context-advanced-demos.js',
    props: __dirname + '/../docs/scripts/vue-context-props-demos.js',
};

const renameFile = path => {
    const id = Date.now();

    const parts = path.split('/');
    const fileName = parts[parts.length - 1];

    const fileNameParts = fileName.split('.');

    const newName = `${fileNameParts[0]}.${id}.${fileNameParts[1]}`;
    const newPath = __dirname + '/../docs/scripts/' + newName;

    fs.renameSync(path, newPath);

    return newName;
};

const updateScriptSrc = (markdownFile, newName) => {
    const content = fs.readFileSync(markdownFile, 'utf-8');
    const lines = content.split("\n");
    const scriptLine = lines[lines.length - 2];

    if (scriptLine.startsWith('<script')) {
        lines[lines.length - 2] = `<script src="../scripts/${newName}"></script>`;
    }

    fs.writeFileSync(markdownFile, lines.join("\n"));
};

Object.keys(scripts).forEach(key => {
    const path = scripts[key];
    const newName = renameFile(path);

    updateScriptSrc(docFiles[key], newName);
});

return;
