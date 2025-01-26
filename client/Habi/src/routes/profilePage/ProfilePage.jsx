import React, { useContext, useEffect } from "react";
import "./profilePage.scss";
import List from "../../components/list/List";
import Chat from "../../components/chat/Chat";
import apiRequest from "../../lib/apiRequest"
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";

const ProfilePage = () => {
  const { updateUser, currentUser } = useContext(AuthContext);

  const navigate = useNavigate();

  // ------- saroj changes --------
  // useEffect(() => {
  //   const getUser = async () => {
  //     const response = await apiRequest.get(
  //       `/users/${currentUser.userinfo.id}`,
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );
  //     console.log("Response", response);
  //   };
  // }, []);
  // ------- up to here -------

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
              <img src={currentUser.avatar || "/noavatar.png"} alt="" />
            </div>
            <div className="second">
              <div className="second-a">
                <span className="value" id="username">
                  {currentUser.username}
                </span>
              </div>
              <div className="second-b">
                <span className="value">
                  <img src="/pin.png" alt="" />
                  <span className="value">Samakhushi Kathmandu</span>
                </span>
                <span className="value">
                  <img src="/email.png" alt="" />
                  <span>{currentUser.email}</span>
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
            <Link to="/profile/update">
              <button>Update Profile</button>
            </Link>
            <Link to="/add">
              <button>Create New Post</button>
            </Link>
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
