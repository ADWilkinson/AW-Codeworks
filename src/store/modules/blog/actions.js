import MediumService from '../../../service/medium-service';

export default {
  async retrieveMediumData({ commit }) {
    let service = new MediumService();

    let response = await service.GetMediumData();

    commit('setMediumData', response);
  }
};
