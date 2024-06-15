import { Navigate } from 'react-router-dom';

type Props = {
  children: JSX.Element;
};
const RequireAuth = ({ children }: Props) => {
  const isAuth = localStorage.getItem('jwtLocalStorage');

  return isAuth ? children : <Navigate to={'/'} />;
};

export default RequireAuth;
