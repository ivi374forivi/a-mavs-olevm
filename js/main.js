/*
 * 
 * Considering following the idiomatic style guide
 * https://www.npmjs.com/package/eslint-config-idiomatic
 * https://github.com/rwaldron/idiomatic.js
 * 
 */

/**
 * Document on load functions
 */

$(document).ready(function () {
    var hash = window.location.hash;
    // Goes to the section in the URL
    if (hash) {
        var _hash = $(hash);

        _hash.removeClass("dn");
        if (hash === "#stills" || hash === "#diary" ) { 
            _hash.addClass("dt");
        }
        currentPage = Page.findPage(hash);
        currentPage.initPage();
    } else {
        $("#landing").removeClass("dn");
        currentPage = Page.findPage("#landing");
    }
    
});


/**
 * Array.some() polyfill
 * Production steps of ECMA-262, Edition 5, 15.4.4.17
 * Reference: http://es5.github.io/#x15.4.4.17
 */

if (!Array.prototype.some) {
    Array.prototype.some = function(fun/*, thisArg*/) {
        'use strict';

        if (this == null) {
            throw new TypeError('Array.prototype.some called on null or undefined');
        }

        if (typeof fun !== 'function') {
            throw new TypeError();
        }

        var t = Object(this);
        var len = t.length >>> 0;

        var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
        for (var i = 0; i < len; i++) {
            if (i in t && fun.call(thisArg, t[i], i, t)) {
                return true;
            }
        }

        return false;
    };
}