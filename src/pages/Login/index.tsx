import './index.css';
import circle from '../../assets/circle.svg';
import circle2 from '../../assets/circle2.svg';
import seats from '../../assets/seats.svg';
import CDA from '../../assets/CDA.png';
import { useState } from 'react';
import { loginService } from '../../services/login';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  let [currentMethod, setCurrentMethos] = useState('login');
  const [valuesLogin, setValuesLogin] = useState({
    email: '',
    password: '',
  });
  const [valuesRegister, setValuesRegister] = useState({
    email: '',
    name: '',
    password: '',
  });

  let navigate = useNavigate();

  const handleChangesValuesLogin = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setValuesLogin((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  const handleChangesValuesRegister = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setValuesRegister((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  const loginUser = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const response = await loginService.login(valuesLogin);
    const jwt = response.data.token;
    if (jwt) {
      localStorage.setItem('jwtLocalStorage', jwt);
      console.log(jwt);
    }
    navigate('/home');
  };
  const RegisterUser = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="loginContainer">
        <img src={circle} alt="" className="circle1 position" />
        <img src={circle2} alt="" className="circle2 position" />
        <img src={seats} alt="" className="seats position" />
        <img src={CDA} alt="" className="cda position" />
        <div className="loginFormContainer">
          {currentMethod == 'login' ? (
            //login
            <>
              <h1 className="loginH1">LOGIN</h1>
              <form onSubmit={loginUser} className="FormLogin">
                <div className="inputsContainer">
                  <input
                    className="input"
                    placeholder="Email"
                    type="email"
                    name="email"
                    onChange={handleChangesValuesLogin}
                  />
                  <input
                    className="input"
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={handleChangesValuesLogin}
                  />
                </div>
                <div className="buttonCOntainer">
                  <button className="sendButton" type="submit">
                    login
                  </button>
                </div>
              </form>
              <h2 className="h2SignUp">
                Don't have an account?
                <strong onClick={() => setCurrentMethos('register')}>
                  Sign up
                </strong>
              </h2>
            </>
          ) : (
            //register
            <>
              <h1 className="loginH1">SIGN UP</h1>
              <form onSubmit={RegisterUser} className="FormLogin">
                <div className="inputsContainer">
                  <input
                    className="input"
                    placeholder="Email"
                    type="email"
                    name="email"
                    onChange={handleChangesValuesRegister}
                  />
                  <input
                    className="input"
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={handleChangesValuesRegister}
                  />
                  <input
                    className="input"
                    placeholder="Name"
                    type="text"
                    name="name"
                    onChange={handleChangesValuesRegister}
                  />
                </div>
                <div className="buttonCOntainer">
                  <button className="sendButton" type="submit">
                    Register
                  </button>
                </div>
              </form>
              <h2 className="h2SignUp">
                Have an account?
                <strong onClick={() => setCurrentMethos('login')}>
                  Log in
                </strong>
              </h2>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Login;
