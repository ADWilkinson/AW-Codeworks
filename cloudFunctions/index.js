import BaseService from './axios';
const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.mediumData = functions.https.onRequest(async (request, response) => {
  let service = new BaseService();

  let resData = service.api
    .get('https://medium.com/@andywilkinson1993/latest?format=json')
    .then(response => {
      let data = JSON.stringify(response.data);
      return data;
    })
    .catch(error => console.log(error));
    
  response.set('Access-Control-Allow-Origin', '*');
  resData.then(data => response.status(200).send(data)).catch(error => console.log(error));
});
