"use strict";

var _axios = _interopRequireDefault(require("./axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const functions = require('firebase-functions'); // // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//


exports.mediumData = functions.https.onRequest((request, response) => {
  let service = new _axios.default();
  let res = new Promise((resolve, reject) => {
    service.api.get(`${'https://cors-anywhere.herokuapp.com/'}https://medium.com/@andywilkinson1993/latest?format=json`).then(response => {
      resolve(response);
    }).catch(error => reject(error));
  });
  res.then(res => {
    response.send(res);
  });
});