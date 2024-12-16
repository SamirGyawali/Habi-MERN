import React, { useContext } from "react";
import "./profileUpdatePage.scss";
import { AuthContext } from "../../context/AuthContext";

const ProfileUpdatePage = () => {
    const {currentUser, updateUser} = useContext(AuthContext);
    console.log(currentUser);

  return (
    <div className="main-div">
      <div className="image-div">
        <img name = 'image' src={currentUser.userinfo.avatar || '/noavatar.png'} alt="" />
      </div>
      <div className="update-form">
        <div className="form-row">
          <div className="form-field">
            <label htmlFor="username" >Username</label>
            <input type="text" name="username" defaultValue={currentUser.userinfo.username}/>
          </div>
          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" defaultValue={currentUser.userinfo.email}/>
          </div>
        </div>
        <div className="form-row">
          <div className="form-field">
            <label htmlFor="inputassword">Password</label>
            <input type="password" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-field">
            <label htmlFor="address">Address</label>
            <input type="text"  name="address" defaultValue={currentUser.userinfo.address}/>
          </div>
        </div>
        <div className="form-row">
          <div className="form-field">
            <label htmlFor="phone">Phone no</label>
            <input type="tel" name="pnone" defaultValue={currentUser.userinfo.phone}/>
          </div>
        </div>

        <div className="form-row">
          <button type="submit" className="submit-btn">
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileUpdatePage;
