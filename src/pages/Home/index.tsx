import CDA from '../../assets/CDA.png';
import user from '../../assets/user.svg';
import home from '../../assets/home.png';
import emblem from '../../assets/emblem.svg';
import logout from '../../assets/logout.png';
import CardList from '../../components/CardList';
import RedeemEmblem from '../../components/Redeem';
import './index.css';
import { useEffect, useState } from 'react';
import UserSettings from '../../components/UserSettings';
import { findUserService } from '../../services/user';
import { useNavigate } from 'react-router-dom';

export type User = {
  id: string;
  email: string;
  name: string;
  profilePicture: string;
  createdAt: string;
  updatedAt: string;
};

const HomePage = () => {
  let [currentePage, setCurrentPage] = useState<string>('cardList');
  let [page, setPage] = useState(<CardList />);
  let [data, setdata] = useState<User>();

  let navigate = useNavigate();

  useEffect(() => {
    getUser();
  }, []);

  let getUser = async () => {
    let response = await findUserService.user();
    setdata(response.data);
  };
  return (
    <>
      <div className="containerAll">
        <div className="dashboardContainerAll">
          <div className="sidebarContainer">
            <div className="containerImage">
              <img className="cdaImage" src={CDA} alt="" />
            </div>
            <div className="containerOptions">
              <div
                onClick={() => {
                  setPage(<CardList />);
                  setCurrentPage('cardList');
                  getUser();
                }}
                className={`ImageOption ${
                  currentePage == 'cardList' ? 'black' : 'gray'
                }  `}
              >
                <img className="iconOption" src={home} alt="home icon " />
              </div>
              <div
                onClick={() => {
                  setPage(<RedeemEmblem />);
                  setCurrentPage('RedeemEmblem');
                  getUser();
                }}
                className={`ImageOption ${
                  currentePage == 'RedeemEmblem' ? 'black' : 'gray'
                }  `}
              >
                <img className="iconOption" src={emblem} alt="emblem icon" />
              </div>
              <div
                onClick={() => {
                  setPage(<UserSettings />);
                  setCurrentPage('UserSettings');
                  getUser();
                }}
                className={`ImageOption ${
                  currentePage == 'UserSettings' ? 'black' : 'gray'
                }  `}
              >
                <img className="iconOption" src={user} alt="user icon" />
              </div>

              <div
                onClick={() => {
                  localStorage.removeItem('jwtLocalStorage');
                  navigate('/');
                }}
                className={`ImageOption `}
              >
                <img className="iconOption" src={logout} alt="logout-icon" />
              </div>
            </div>
          </div>
          <div className="headerAndContent">
            <header className="header">
              <div className="dashboardH1Container">Dashboard</div>
              <div className="userContainer">
                <div
                  onClick={() => {
                    setCurrentPage('UserSettings');
                    setPage(<UserSettings />);
                  }}
                  className="circle"
                >
                  <img
                    src={data?.profilePicture}
                    alt={`foto de perfil do usuario ${data?.name}`}
                    className="userImage"
                  />
                </div>
              </div>
            </header>
            <div className="helloContainer">
              <h1 className="h1Hello">{`Hello, ${data?.name} `}</h1>
            </div>
            <div className="emblemContainerAll">
              <div className="emblemContainer">{page}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
