import toast from 'react-hot-toast';
import api from './api';

interface userLoginObj {
  email: string;
  password: string;
}
interface userObj {
  email: string;
  name: string;
  password: string;
}
const loginService = {
  login: (values: userLoginObj) =>
    api
      .post('/auth', values)
      .then((response: any) => response)
      .catch((error: any) => toast.error('invalid credentials')),
};

const registerService = {
  registerValues: (values: userObj) =>
    api
      .post('/user', values)
      .then((response: any) => response)
      .catch((error: any) => error.response),
};

export { registerService, loginService };
