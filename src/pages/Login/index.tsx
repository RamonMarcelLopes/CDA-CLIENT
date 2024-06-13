import './index.css';
import circle from '../../assets/circle.svg';
import circle2 from '../../assets/circle2.svg';
import seats from '../../assets/seats.svg';
import CDA from '../../assets/CDA.png';

const Login = () => {
  return (
    <>
      <div className="loginContainer">
        <img src={circle} alt="" className="circle1 position" />
        <img src={circle2} alt="" className="circle2 position" />
        <img src={seats} alt="" className="seats position" />
        <img src={CDA} alt="" className="cda position" />
        <div className="loginFormContainer">
          <h1 className="loginH1">LOGIN</h1>
          <form action="" className="FormLogin">
            <div className="inputsContainer">
              <input className="input" placeholder="Email" type="email" />
              <input className="input" type="password" placeholder="Password" />
            </div>
            <div className="buttonCOntainer">
              <button className="sendButton" type="submit">
                login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
