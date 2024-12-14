import React, { useContext, useEffect } from "react";
import "./profilePage.scss";
import List from "../../components/list/List";
import Chat from "../../components/chat/Chat";
import apiRequest from "../../components/lib/apiRequest";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const ProfilePage = () => {
  const { updateUser, currentUser } = useContext(AuthContext);
  // console.log("currentuser = ",currentUser);

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await apiRequest.post("/auth/logout");
      updateUser(null);
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="info">
            <div className="first">
              <img
                src={currentUser.userinfo.avatar || "/noavatar.png"}
                alt=""
              />
            </div>
            <div className="second">
              <div className="second-a">
                <span className="value" id="username">
                  {currentUser.userinfo.username}
                </span>
              </div>
              <div className="second-b">
                <span className="value">
                  <img src="/pin.png" alt="" />
                  <span className="value">Samakhushi Kathmandu</span>
                </span>
                <span className="value">
                  <img src="/email.png" alt="" />
                  <span>{currentUser.userinfo.email}</span>
                </span>
                <span className="value">
                  <img src="/telephone.png" alt="" />
                  <span>9800265875</span>
                </span>
              </div>
            </div>
          </div>
          <div className="buttons">
            <button onClick={handleLogout}>Logout</button>
            <button>Update Profile</button>
            <button>Create New Post</button>
          </div>
          <div className="title">
            <h4>My Posts</h4>
          </div>
          <List />
          <div className="title">
            <h4>Saved List &#129505;</h4>
          </div>
          <List />
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          <Chat />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
