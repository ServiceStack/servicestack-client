(function () {
    "use strict";
    var fs = require('fs');

    function renameComplete(errors) {
        if(errors) {
            throw errors;
        }
    }

    fs.rename('./lib/src/index.d.ts','./lib/index.d.ts',renameComplete);
    fs.rename('./lib/src/index.js','./lib/index.js',renameComplete);
    fs.rename('./lib/src/index.js.map','./lib/index.js.map',renameComplete);

    //HACK to get get downstream dependencies included in npm package and keep VS/TS happy, specifically when using lib from JSPM
    fs.createReadStream('./typings/globals/isomorphic-fetch/index.d.ts').pipe(fs.createWriteStream('./lib/isomorphic-fetch.d.ts'));
})();