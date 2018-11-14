import BaseService from './axios';
const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.mediumData = functions.https.onRequest((request, response) => {
  let service = new BaseService();

  let res = new Promise((resolve, reject) => {
    service.api
      .get(`${'https://cors-anywhere.herokuapp.com/'}https://medium.com/@andywilkinson1993/latest?format=json`)
      .then(response => {
        resolve(response);
      })
      .catch(error => reject(error));
  });

  res.then(res => {
    response.send(res);
  });
});
