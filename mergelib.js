const merge = require('concat');
// var folderName = process.env.AppName || ''
var folderName = process.argv.splice(2);
console.log(process.argv);
console.log(folderName);
if (folderName) {
  const files = [
    './lib/zone.min.js',
    './lib/es2015-polyfills.js',
    './dist/' + folderName + '/scripts.js',
    './dist/' + folderName + '/main.js'
  ];

  merge(files, './dist/' + folderName + '/combined_' + folderName + '.js');
  console.info('combined-' + folderName + '.js file generated');

  // removeScriptTags('./dist/' + folderName + '/index.html');
  // addScriptTags('./dist/' + folderName + '/index.html', './dist/' + folderName + '/combined_' + folderName + '.js');

} else {
  console.info('Please add component name to the npm script input parameter.');
}
