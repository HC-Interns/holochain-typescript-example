// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"b5p2":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function sharedHelper() {
    return "cool!";
}
exports.sharedHelper = sharedHelper;
},{}],"3ER6":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = require("../common/lib");
function genesis() {
    var anInteger;
    anInteger = property("language");
    var aString;
    aString = lib_1.sharedHelper();
    return true;
}
exports.genesis = genesis;
function validateCommit(entryType, entry, header, pkg, sources) {
    return true;
}
exports.validateCommit = validateCommit;
function validatePut(entryType, entry, header, pkg, sources) {
    return true;
}
exports.validatePut = validatePut;
function validateLink(entryType, hash, links, pkg, sources) {
    return true;
}
exports.validateLink = validateLink;
function validateMod(entryType, entry, header, replaces, pkg, sources) {
    return true;
}
exports.validateMod = validateMod;
function validateDel(entryType, hash, pkg, sources) {
    return true;
}
exports.validateDel = validateDel;
function validatePutPkg(entryType) {
    return null;
}
exports.validatePutPkg = validatePutPkg;
function validateModPkg(entryType) {
    return null;
}
exports.validateModPkg = validateModPkg;
function validateDelPkg(entryType) {
    return null;
}
exports.validateDelPkg = validateDelPkg;
function validateLinkPkg(ebtryType) {
    return null;
}
exports.validateLinkPkg = validateLinkPkg;
},{"../common/lib":"b5p2"}],"Focm":[function(require,module,exports) {
"use strict";

function __export(m) {
    for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./required-callbacks"));
var CONSTANT = 10;
},{"./required-callbacks":"3ER6"}]},{},["Focm"], null)