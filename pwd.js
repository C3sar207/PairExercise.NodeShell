// module.exports = process.stdin.on('data', (data) => {
//           // const cmd = data.toString().trim();
//           console.log('hi')
//           process.stdout.write(process.cwd());
//           process.stdout.write('\nprompt > ');
//         });

        const pwd = (data) => {
          return process.stdout.write(process.cwd())
        }

        module.exports = pwd;