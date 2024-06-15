import './index.css';
import circle from '../../assets/circle.svg';
import circle2 from '../../assets/circle2.svg';
import seats from '../../assets/seats.svg';
import CDA from '../../assets/CDA.png';
import { useState } from 'react';
import { loginService } from '../../services/login';
import { useNavigate } from 'react-router-dom';
import { createUserService } from '../../services/user';

const Login = () => {
  let [currentMethod, setCurrentMethod] = useState('login');
  let [show, setShow] = useState(false);
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
      navigate('/home');
    }
  };
  const RegisterUser = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    let response = createUserService.createUser(valuesRegister);
    setCurrentMethod('login');
    console.log(valuesRegister);
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
                    defaultValue={valuesLogin.email}
                    value={valuesLogin.email}
                  />
                  <input
                    className="input"
                    type={show ? 'text' : 'password'}
                    placeholder="Password"
                    name="password"
                    onChange={handleChangesValuesLogin}
                    defaultValue={valuesLogin.password}
                    value={valuesLogin.password}
                  />
                  <button
                    onClick={() => setShow(!show)}
                    className="buttonShow"
                    type="button"
                  >
                    {show ? 'hide' : 'show'}
                  </button>
                </div>
                <div className="buttonCOntainer">
                  <button className="sendButton" type="submit">
                    login
                  </button>
                </div>
              </form>
              <h2 className="h2SignUp">
                Don't have an account?
                <strong onClick={() => setCurrentMethod('register')}>
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
                    defaultValue={valuesRegister.email}
                    value={valuesRegister.email}
                  />

                  <input
                    className="input"
                    type={show ? 'text' : 'password'}
                    placeholder="Password"
                    name="password"
                    onChange={handleChangesValuesRegister}
                    defaultValue={valuesRegister.password}
                    value={valuesRegister.password}
                  />
                  <button
                    onClick={() => setShow(!show)}
                    type="button"
                    className="buttonShow2"
                  >
                    {show ? 'hide' : 'show'}
                  </button>
                  <input
                    className="input"
                    placeholder="Name"
                    type="text"
                    name="name"
                    onChange={handleChangesValuesRegister}
                    defaultValue={valuesRegister.name}
                    value={valuesRegister.name}
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
                <strong onClick={() => setCurrentMethod('login')}>
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
