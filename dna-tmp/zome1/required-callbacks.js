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
