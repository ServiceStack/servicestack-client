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
})();