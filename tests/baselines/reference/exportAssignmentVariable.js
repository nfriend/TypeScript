//// [tests/cases/compiler/exportAssignmentVariable.ts] ////

//// [exportAssignmentVariable_A.ts]
var x = 0;

export = x;

//// [exportAssignmentVariable_B.ts]
import y = require("exportAssignmentVariable_A");

var n: number = y;

//// [exportAssignmentVariable_A.js]
var x = 0;
module.exports = x;
//// [exportAssignmentVariable_B.js]
var y = require("exportAssignmentVariable_A");
var n = y;