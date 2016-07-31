(function () {
    "use strict";
    var fs = require('fs');

    function renameComplete(errors) {
        if(errors) {
            throw errors;
        }
    }

    fs.rename('./src/index.js','./lib/index.js',renameComplete);
    fs.rename('./src/index.js.map','./lib/index.js.map',renameComplete);
})();