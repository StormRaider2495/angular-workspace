/*
To run this script
$ node custom-serve-script --appName:(application name) --host:(host IP) --port:(host port)
--appName parameter accepts the applciation name
--host parameter accepts the IP Address for hosting
--port parameter accepts the PORT number
-o parameter determines whether app will open directly in browser
PARAMETER SYNTAX => (--)(parametername)(:)(parameter argument without white-space)
*/

const child_process = require('child_process');
const DEFAULT_APP = "vocabulary-game-engine";

const args = process.argv;
console.log(args);

var buildConfig = {};
for (let index = 2; index < args.length; index++) {
  const input = '' + args[index];
  if (input === 'o'||input === '-o') {
    buildConfig['open'] = true;
  } else {
    buildConfig[input.split(':')[0].replace(/--/gi, '')] = input.split(':')[1];
  }
}
console.log(buildConfig);

var appName = buildConfig.appName ? buildConfig.appName : DEFAULT_APP;
var appHost = buildConfig.host ? buildConfig.host : '';
var appPort = buildConfig.port ? buildConfig.port : '';
var appOpen = buildConfig.open ? true : false;

if (appName) {
  // form the serve command for the application
  host = appHost ? ' --host ' + appHost : '';
  port = appPort ? ' --port ' + appPort : '';
  open = appOpen ? ' -o ' : '';

  const serveCmd = "ng serve " + appName + host + port + open;
  console.log('Serving Application : ' + appName);

  // execute synchronous ng build command to build the angular application
  console.log("\n> Running serve command");
  console.log("> " + serveCmd);
  child_process.execSync("" + serveCmd, {
    stdio: [0, 1, 2]
  });
} else {
  console.log('Please provide application name to be build.')
}
