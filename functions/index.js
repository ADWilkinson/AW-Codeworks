"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

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
    var service, resData;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          service = new _axios.default();
          resData = service.api.get('https://medium.com/@andywilkinson1993/latest?format=json').then(response => {
            let data = JSON.stringify(response.data);
            return data;
          }).catch(error => console.log(error));
          resData.then(data => response.status(200).send(data)).catch(error => console.log(error));

        case 3:
        case "end":
          return _context.stop();
      }
    }, _callee, this);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());