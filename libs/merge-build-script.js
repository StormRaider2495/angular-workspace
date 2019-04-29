var fs = require('fs');
const MERGE = require('concat');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const DEFAULT_APP = "vocabulary-game-engine";

const args = process.argv.splice(2);

var folderName = args.length > 0 ? args : DEFAULT_APP;

console.log('argument received: ' + folderName);
if (folderName) {
  const destinationPath = './dist/' + folderName;
  // scripts.js contain all the build dependencies added in scripts array in angular.json
  // and must be loaded before zone.js
  const files = [
    destinationPath + '/scripts.js',
    './libs/zone.min.js',
    destinationPath + '/es2015-polyfills.js',
    destinationPath + '/main.js'
  ];

  var updatedFilesArray = filesPresentArray(files);

  const newFiles = [
    './combined-' + folderName + '.js'
  ];
  const mergedFileName = 'combined-' + folderName + '.js';
  MERGE(updatedFilesArray, destinationPath + '/' + mergedFileName).then((result) => {
    console.info(mergedFileName + ' file generated');
    updateScriptTags(
      destinationPath + '/index.html',
      destinationPath + '/index.html',
      files,
      newFiles
    );
  });
} else {
  console.info('Please add component name to the npm script input parameter.');
}

function updateScriptTags(indexHtmlPath, updatedHtmlPath, scriptPaths, newScriptPaths) {
  // Specify utf8 encoding for fs.readFile,
  // you will retrieve the raw buffer instead of the expected file contents.
  fs.readFile(indexHtmlPath, 'utf8', (err, data) => {
    let doc = new JSDOM(data),
      document = doc.window.document;

    // check for presence of scripts containing js files from the files array
    let scripts = document.querySelectorAll('script');
    scripts.forEach((element, index) => {
      if (isScriptMerged(element.src, scriptPaths)) {
        element.parentNode.removeChild(element);
      }
    });

    // add the paths provided in the newScriptArray to the updated index html
    newScriptPaths.forEach(newScriptPath => {
      appendScripts(document, newScriptPath)
    });

    let htmlText = serializeDocumentObject(document);

    fs.writeFile(updatedHtmlPath, htmlText, (err) => {
      if (err) throw err;
      console.log('index html updated!');
    });
  });
}

function serializeDocumentObject(domObject) {
  return domObject.documentElement.outerHTML
}

function isScriptMerged(scriptSrc, scriptPaths) {
  for (let index = 0; index < scriptPaths.length; index++) {
    if (scriptPaths[index].split('/')[scriptPaths[index].split('/').length - 1] === scriptSrc) {
      if (scriptPaths[index].indexOf('/lib/') === -1) {
        fs.unlink(scriptPaths[index], (err) => {
          if (err) throw err;
          console.log('successfully deleted ' + scriptPaths[index]);
        });
      }
      return true
    }
  }
  return false
}

function filesPresentArray(files) {
  let updatedFilesArray = [];
  for (let index = 0; index < files.length; index++) {
    if(fs.existsSync(files[index])) {
      updatedFilesArray.push(files[index]);
    }
  }
  return updatedFilesArray;
}

function appendScripts(document, newScriptPath) {
  // need to append scripts before body closing, else zone.js wont work to update angular communication
  var body = document.getElementsByTagName('body')[0];
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = newScriptPath;
  body.appendChild(script);
}
