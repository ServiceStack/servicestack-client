sed -i 's/})(function/    else if (typeof window != "undefined") factory(function(){}, window["\@servicestack\/client"]={});\n})(function/' dist/servicestack-client.umd.js
