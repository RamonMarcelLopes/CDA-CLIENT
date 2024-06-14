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
export { findAllService };
