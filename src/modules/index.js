import fs from 'fs';
import path from 'path';
import { mapFiles, getFiles } from 'utils/files';

//because JEST uses node.. and cant use a require.context webpack function.
if (typeof require.context === 'undefined') {
  require.context = (base = '.', scanSubDirectories = false, regularExpression = /\.js$/) => {
    const files = {};

    function readDirectory(directory) {
      fs.readdirSync(directory).forEach(file => {
        const fullPath = path.resolve(directory, file);

        if (fs.statSync(fullPath).isDirectory()) {
          if (scanSubDirectories) readDirectory(fullPath);

          return;
        }

        if (!regularExpression.test(fullPath)) return;

        files[fullPath] = true;
      });
    }

    readDirectory(path.resolve(__dirname, base));

    function Module(file) {
      return require(file);
    }

    Module.keys = () => Object.keys(files);

    return Module;
  };
}
export const reducers = mapFiles(getFiles(require.context('./', true, /reducer.js/)));
export const actions = mapFiles(getFiles(require.context('./', true, /actions.js/)));

export default {
  reducers,
  actions,
};
