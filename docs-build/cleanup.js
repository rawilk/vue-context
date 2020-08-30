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
