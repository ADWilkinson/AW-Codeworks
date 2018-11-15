import BaseService from './base-service';

export default class MediumService extends BaseService {
  constructor() {
    super();
  }

  async GetMediumData() {
    return await new Promise((resolve, reject) => {
      this.api
        .get('https://us-central1-awcodeworks.cloudfunctions.net/mediumData')
        .then(response => {
          resolve(response);
        })
        .catch(error => reject(error));
    });
  }
}
