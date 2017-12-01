const fs = require('fs');

fs.readFile('./info1.json', 'utf-8', (err, data) => {
    if (err) {
        return console.log(err);
    }
    console.log(data);
});