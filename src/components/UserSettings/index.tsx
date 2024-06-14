import { useEffect, useState } from 'react';
import { User } from '../../pages/Home';
import './index.css';
import { findUserService } from '../../services/user';
const UserSettings = () => {
  let [data, setdata] = useState<User>();

  useEffect(() => {
    getUser();
  }, []);

  let getUser = async () => {
    let response = await findUserService.user();
    setdata(response.data);
  };
  return (
    <>
      <div className="EditUserContainerAll">
        <div className="editUserContainer">
          <div className="Form">
            <form className="FormEditUser" action="">
              <h2 className="editUser">Edit User</h2>
              <label className="labelEdit" htmlFor="nome">
                Nome:
              </label>
              <input
                name="nome"
                placeholder="nome"
                className="inputForm"
                type="text"
                defaultValue={data?.name}
              />
              <label className="labelEdit" htmlFor="email">
                Email:
              </label>
              <input
                name="email"
                placeholder="email"
                className="inputForm"
                type="text"
                defaultValue={data?.email}
              />
              <label className="labelEdit" htmlFor="senha">
                Senha:
              </label>
              <input
                name="senha"
                placeholder="senha"
                className="inputForm"
                type="password"
              />
            </form>
          </div>
          <div className="image">
            <div className="containerShowImage">
              <img
                className="imgProfile"
                src={data?.profilePicture}
                alt={`foto de perfil do(a) ${data?.name}`}
              />
            </div>
            <div className="containerImageProfile">
              <button type="button" className="buttonChangeProfilePicture">
                trocar foto de perfil
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserSettings;
