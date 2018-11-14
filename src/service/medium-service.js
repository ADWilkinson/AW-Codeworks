import BaseService from './base-service';

export default class MediumService extends BaseService {
  constructor() {
    super();
  }

  async GetMediumData() {
    return await new Promise((resolve, reject) => {
      this.api
        .get(
          `${'https://cors-anywhere.herokuapp.com/'}https://medium.com/@andywilkinson1993/latest?format=json`
        )
        .then(response => {
          resolve(response);
        })
        .catch(error => reject(error));
    });
  }
}
