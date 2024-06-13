import './index.css';
const UserSettings = () => {
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
              />
              <label className="labelEdit" htmlFor="email">
                Email:
              </label>
              <input
                name="email"
                placeholder="email"
                className="inputForm"
                type="text"
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
                src="https://jacaimages.vercel.app/imgs/icons/defaultUser.jpg"
                alt=""
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
