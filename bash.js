const pwd = require('./pwd');
const cat = require('./cat');

process.stdout.write('prompt > ');

// module.exports = process.stdin.on('data', (data) => {
//   // const cmd = data.toString().trim();
//   console.log('hi')
//   process.stdout.write(process.cwd());
//   process.stdout.write('\nprompt > ');
// });

pwd()