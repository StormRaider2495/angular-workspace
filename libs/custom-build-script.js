const child_process = require('child_process');
const DEFAULT_APP = "vocabulary-game-engine";

const args = process.argv.splice(2);

var buildAppName = args.length > 0 ? args : DEFAULT_APP;

if (buildAppName) {
  // form the build command for the application
  const buildCmd = "ng build " + buildAppName + " --prod --output-hashing=none --single-bundle=true";

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
