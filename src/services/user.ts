import api from './api';
export type UserEdit = {
  email?: string;
  name?: string;
  password?: string;
  profilePicture?: string;
};

const findUserService = {
  user: () =>
    api
      .get('/auth')
      .then((response: any) => {
        return response;
      })
      .catch((error: any) => console.log(error)),
};

const updateUserService = {
  updateUser: (data: UserEdit) =>
    api
      .patch(`user/edit`, data)
      .then((response: any) => response)
      .catch((error: any) => console.log(error)),
};
export { findUserService, updateUserService };
