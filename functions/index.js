"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _promise = _interopRequireDefault(require("@babel/runtime/core-js/promise"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

require("@babel/polyfill");

var _axios = _interopRequireDefault(require("./axios"));

const functions = require('firebase-functions'); // // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//


exports.mediumData = functions.https.onRequest(
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(request, response) {
    var service, res;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          service = new _axios.default();
          _context.next = 3;
          return new _promise.default((resolve, reject) => {
            service.api.get('https://medium.com/@andywilkinson1993/latest?format=json').then(response => {
              console.log(response);
              resolve(response);
            }).catch(error => reject(error));
          });

        case 3:
          res = _context.sent;
          response.send(res);

        case 5:
        case "end":
          return _context.stop();
      }
    }, _callee, this);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());