import './index.css';
import circle from '../../assets/circle.svg';
import circle2 from '../../assets/circle2.svg';
import seats from '../../assets/seats.svg';
import CDA from '../../assets/CDA.png';
import { useState } from 'react';

const Login = () => {
  let [currentMethod, setCurrentMethos] = useState('login');

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
              <form action="" className="FormLogin">
                <div className="inputsContainer">
                  <input className="input" placeholder="Email" type="email" />
                  <input
                    className="input"
                    type="password"
                    placeholder="Password"
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
              <form action="" className="FormLogin">
                <div className="inputsContainer">
                  <input className="input" placeholder="Name" type="text" />
                  <input className="input" placeholder="Email" type="email" />
                  <input
                    className="input"
                    type="password"
                    placeholder="Password"
                  />
                </div>
                <div className="buttonCOntainer">
                  <button className="sendButton" type="submit">
                    login
                  </button>
                </div>
              </form>
              <h2 className="h2SignUp">
                Have an account?{' '}
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
