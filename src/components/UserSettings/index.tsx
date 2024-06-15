import { useEffect, useState } from 'react';

import './index.css';
import {
  UserEdit,
  findUserService,
  updateUserService,
} from '../../services/user';
import toast from 'react-hot-toast';
import { User } from '../../pages/Home';
import { useNavigate } from 'react-router-dom';

type UserChange = {
  name?: string;
  profilePicture?: string;
  email?: string;
  password?: string;
};

const UserSettings = () => {
  let [data, setdata] = useState<User>();
  let [userData, setUserData] = useState<UserChange>({});
  let [att, setAtt] = useState<boolean>(false);
  let [show, setShow] = useState(false);

  let navigate = useNavigate();

  useEffect(() => {
    getUser();
  }, []);
  useEffect(() => {
    getUser();
  }, [att]);

  const handleChangeValues = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserData((values: UserEdit) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  let editUser = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    let response: any = await updateUserService
      .updateUser(userData)
      .then(() => setAtt(!att));

    toast('User updated successfully', {
      icon: '✅',
      style: {
        borderRadius: '10px',
        background: '#ffb905',
        color: '#fff',
        fontFamily: 'Poppins',
        border: '1px solid #fff',
      },
    });

    if (userData.email || userData.password) {
      localStorage.removeItem('jwtLocalStorage');
      navigate('/');
      toast('please relog', {
        icon: '🔄',
        style: {
          borderRadius: '10px',
          background: '#61ff05',
          color: '#161515',
          fontFamily: 'Poppins',
          border: '1px solid #fff',
        },
      });
    }
  };

  let getUser = async () => {
    let response = await findUserService.user();
    setdata(response.data);
  };
  return (
    <>
      <div className="EditUserContainerAll">
        <div className="editUserContainer">
          <div className="Form">
            <form className="FormEditUser" onSubmit={editUser}>
              <h2 className="editUser">Edit User</h2>
              <label className="labelEdit" htmlFor="name">
                Name:
              </label>
              <input
                name="name"
                placeholder="nome"
                className="inputForm"
                type="text"
                defaultValue={data?.name}
                onChange={handleChangeValues}
              />
              <label className="labelEdit" htmlFor="profilePicture">
                Profile picture:
              </label>
              <input
                name="profilePicture"
                placeholder="https://example.png"
                className="inputForm"
                type="text"
                defaultValue={''}
                onChange={handleChangeValues}
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
                onChange={handleChangeValues}
              />
              <div className="password">
                <label className="labelEdit" htmlFor="password">
                  Password:
                </label>
                <input
                  name="password"
                  placeholder="senha"
                  className="inputForm"
                  type={show == true ? 'text' : 'password'}
                  onChange={handleChangeValues}
                />
                <button
                  onClick={() => setShow(!show)}
                  type="button"
                  className="show"
                >
                  {show ? 'hide' : 'Show'}
                </button>
              </div>
              <div className="buttonSaveContainer">
                <button type="submit"> save </button>
              </div>
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
            <div className="containerImageProfile"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserSettings;
