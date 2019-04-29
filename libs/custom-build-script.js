const child_process = require('child_process');
const DEFAULT_APP = "vocabulary-game-engine";

const args = process.argv;

var buildConfig = {};
console.log(args);

for (let index = 2; index < args.length; index++) {
  const input = '' + args[index];
    buildConfig[input.split(':')[0].replace(/--/gi, '')] = input.split(':')[1];
}

var buildAppName = buildConfig.appName ? buildConfig.appName : DEFAULT_APP

if (buildAppName) {
  let prodFlag = buildConfig.prod && buildConfig.prod === 'true' ? ' --prod' : ''
  // form the build command for the application
  const buildCmd = "ng build " + buildAppName + " --output-hashing=none --single-bundle true " + prodFlag;

  // form the merge command for the application
  const mergeCmd = "npm run singlePackage " + buildAppName + "";

  console.log('Building Application : ' + buildAppName);

  // execute synchronous ng build command to build the angular application
  console.log("\n> Running build command");
  console.log("> " + buildCmd);
  child_process.execSync("" + buildCmd, {
    stdio: [0, 1, 2]
  });
  // execute synchronous npm command to run the merge-build-script.js node script
  console.log("\n> Running merge command");
  console.log("> " + mergeCmd);
  child_process.execSync("" + mergeCmd, {
    stdio: [0, 1, 2]
  });
} else {
  console.log('Please provide application name to be build.')
}
