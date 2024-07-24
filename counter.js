const path = require('path');
const fs = require('fs');


const pathJson = path.join(__dirname, 'count.json');

let counter = {
    "/": 0,
    "/about": 0
};

fs.writeFileSync(pathJson, JSON.stringify(counter, null, 2));