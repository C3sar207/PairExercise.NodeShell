const pwd = require('./pwd');
const fs = require('fs');

function cat (commandAndFilename) { //[cat, bash.js]
          const pwdFunc = pwd();
          console.log(pwdFunc);
          fs.readFile(pwdFunc, (err, data) => {
                    if (err) throw err;
                    console.log(data);
                  })
}
cat();
module.exports = cat;