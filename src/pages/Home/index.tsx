import CDA from '../../assets/CDA.png';
import user from '../../assets/user.svg';
import home from '../../assets/home.png';
import emblem from '../../assets/emblem.svg';
import CardList from '../../components/CardList';
import RedeemEmblem from '../../components/Redeem';
import './index.css';
import { useState } from 'react';
import UserSettings from '../../components/UserSettings';
const HomePage = () => {
  let [currentePage, setCurrentPage] = useState<string>();
  let [page, setPage] = useState(<CardList />);
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
                }}
                className={`ImageOption ${
                  currentePage == 'cardList' ? 'black' : 'gray'
                }  `}
              >
                <img className="iconOption" src={home} alt="" />
              </div>
              <div
                onClick={() => {
                  setPage(<RedeemEmblem />);
                  setCurrentPage('RedeemEmblem');
                }}
                className={`ImageOption ${
                  currentePage == 'RedeemEmblem' ? 'black' : 'gray'
                }  `}
              >
                <img className="iconOption" src={emblem} alt="" />
              </div>
              <div
                onClick={() => {
                  setPage(<UserSettings />);
                  setCurrentPage('UserSettings');
                }}
                className={`ImageOption ${
                  currentePage == 'UserSettings' ? 'black' : 'gray'
                }  `}
              >
                <img className="iconOption" src={user} alt="" />
              </div>
            </div>
          </div>
          <div className="headerAndContent">
            <header className="header">
              <div className="dashboardH1Container">Dashboard</div>
              <div className="userContainer">
                <div className="circle">
                  <img
                    src="https://jacaimages.vercel.app/imgs/logos/jacareimage.png"
                    alt=""
                    className="userImage"
                  />
                </div>
              </div>
            </header>
            <div className="helloContainer">
              <h1 className="h1Hello">Hello, user</h1>
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
