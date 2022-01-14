const fs = require('fs');
const path = require('path');


const directory = path.resolve(__dirname, "data");
const files = fs.readdirSync(directory);

const fakeDB = {};

files.forEach(filename => {
    if(/.*\.json$/.test(filename)) {
        const name = filename.replace('.json', '').trim().toLocaleLowerCase();
        const file = path.resolve(directory, filename);

        fakeDB[name] = require(file);
    }
});

module.exports = () => (fakeDB);