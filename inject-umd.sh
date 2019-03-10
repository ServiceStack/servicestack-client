sed -i 's/})(function/    else if (typeof window != "undefined") factory(window.require||function(){}, window["\@servicestack\/client"]={});\n})(function/' dist/servicestack-client.umd.js
