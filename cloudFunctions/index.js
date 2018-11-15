import '@babel/polyfill';
import BaseService from './axios';
const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.mediumData = functions.https.onRequest(async (request, response) => {
  let service = new BaseService();

  let res = await new Promise((resolve, reject) => {
    service.api
      .get('https://medium.com/@andywilkinson1993/latest?format=json')
      .then(response => {
        console.log(response);
        resolve(response);
      })
      .catch(error => reject(error));
  });

  response.send(res);
});
