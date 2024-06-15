import api from './api';

const findAllService = {
  userEmblems: () =>
    api
      .get('/user')
      .then((response: any) => {
        return response;
      })
      .catch((error: any) => console.log(error)),
};

const EmblemService = {
  getNewEmblem: () =>
    api
      .patch(`user/add/emblem`)
      .then((response: any) => response)
      .catch((error: any) => console.log(error)),
};
export { findAllService, EmblemService };
