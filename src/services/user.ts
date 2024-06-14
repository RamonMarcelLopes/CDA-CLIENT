import api from './api';

const findUserService = {
  user: () =>
    api
      .get('/auth')
      .then((response: any) => {
        return response;
      })
      .catch((error: any) => console.log(error)),
};
export { findUserService };
