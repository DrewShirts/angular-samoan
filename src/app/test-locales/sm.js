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
      var i = Math.floor(Math.abs(n)), v = n.toString().replace(/^[^.]*\.?/, '').length, f = parseInt(n.toString().replace(/^[^.]*\.?/, ''), 10) || 0;
      if (v === 0 && (i === 1 || i === 2 || i === 3) ||
          v === 0 && !(i % 10 === 4 || i % 10 === 6 || i % 10 === 9) ||
          !(v === 0) && !(f % 10 === 4 || f % 10 === 6 || f % 10 === 9))
          return 1;
return 5;
}

exports.default = [
'sm',
[['a', 'p'], ['AM', 'PM'], u],
[['AM', 'PM'], u, u],
[
  ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  ['Aso Sa', 'Aso Gafua', 'Aso Lua', 'Aso Lulu', 'Aso Tofi', 'Aso Faralie', 'Aso Tonaʻi'],
  ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
],
u,
[
  ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  [
    'Ianuari', 'Fepuari', 'Mati', 'Aperila', 'Me', 'Iuni', 'Iulai', 'Auguso', 'Setema',
    'Oketopa', 'Novema', 'Tesema'
  ]
],
[
  ['E', 'P', 'M', 'A', 'M', 'Hun', 'Hul', 'Ago', 'Set', 'Okt', 'Nob', 'Dis'],
  ['Ene', 'Peb', 'Mar', 'Abr', 'May', 'Hun', 'Hul', 'Ago', 'Set', 'Okt', 'Nob', 'Dis'],
  [
    'Enero', 'Pebrero', 'Marso', 'Abril', 'Mayo', 'Hunyo', 'Hulyo', 'Agosto', 'Setyembre',
    'Oktubre', 'Nobyembre', 'Disyembre'
  ]
],
[['B', 'A'], ['BC', 'AD'], ['Before Christ', 'Anno Domini']],
0,
[6, 0],
['M/d/yy', 'MMM d, y', 'MMMM d, y', 'EEEE, MMMM d, y'],
['h:mm a', 'h:mm:ss a', 'h:mm:ss a z', 'h:mm:ss a zzzz'],
['{1}, {0}', u, '{1} \'at\' {0}', u],
['.', ',', ';', '%', '+', '-', 'E', '×', '‰', '∞', 'NaN', ':'],
['#,##0.###', '#,##0%', '¤#,##0.00', '#E0'],
'USD',
'$',
'US Dollar',
{},
'ltr',
plural
];
});
