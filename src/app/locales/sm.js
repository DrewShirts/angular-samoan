/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
 (function (factory) {
  if (typeof module === "object" && typeof module.exports === "object") {
      var v = factory(null, exports);
      if (v !== undefined) module.exports = v;
  }
  else if (typeof define === "function" && define.amd) {
      define("@angular/common/locales/sm", ["require", "exports"], factory);
  }
})(function (require, exports) {
  "use strict";
  Object.defineProperty(exports, "__esModule", { value: true });
// THIS CODE IS GENERATED - DO NOT MODIFY
// See angular/tools/gulp-tasks/cldr/extract.js
var u = undefined;
function plural(n) {
  return 5;
}

exports.default = [
'sm',
[['AM', 'PM'], u, ['AM', 'PM']],
[['AM', 'PM'], u, ['AM', 'PM']],
[
  ['S', 'G', 'L', 'L', 'T', 'F', 'T'],
  ['Aso Sā', 'Aso Gafua', 'Aso Lua', 'Aso Lulu', 'Aso Tofi', 'Aso Faralie', 'Aso Toʻanaʻi'],
  ['Sā', 'Ga', 'Lu', 'Lu', 'to', 'Fa', 'To']
],
u,
[
  ['I', 'F', 'M', 'A', 'M', 'I', 'I', 'A', 'S', 'O', 'N', 'T'],
  ['Ian', 'Fep', 'Mar', 'Apr', 'Me', 'Iun', 'Iul', 'Aug', 'Set', 'Oke', 'Nov', 'Tes'],
  [
    'Ianuari', 'Fepuari', 'Mati', 'Aperila', 'Me', 'Iuni', 'Iulai', 'Auguso', 'Setema',
    'Oketopa', 'Novema', 'Tesema'
  ]
],
[['BC', 'AD'], u, ['I luma o Keriso', 'Anno Domini']],
0,
[6, 0],
['d/M/yy', 'd MMM y', 'd MMMM y', 'EEEE d MMMM y'],
['h:mm a', 'h:mm:ss a', 'h:mm:ss a z', 'h:mm:ss a zzzz'],
['{1} {0}', '{1}, {0}', u, u],
['.', ',', ';', '%', '+', '-', 'E', '×', '‰', '∞', 'NaN', ':'],
['#,##0.###', '#,##0%', '¤#,##0.00', '#E0'],
'Tālā',
'WS$',
'Samoan Tālā',
{},
'ltr',
plural
];
});
