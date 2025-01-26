import React, { useContext, useState } from "react";
import "./profileUpdatePage.scss";
import { AuthContext } from "../../context/AuthContext";
import apiRequest from "../../lib/apiRequest"
import { useNavigate } from "react-router-dom";
import UploadWidget from "../../components/uploadWidget/UploadWidget";

const ProfileUpdatePage = () => {
  const { currentUser, updateUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  // const [success, setSuccess] = useState("");

  const [avatar, setAvatar] = useState([]);

  const navigate = useNavigate();

  // handle update user
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    // later add here address and email
    const { username, email, password } = Object.fromEntries(formData);

    try {
      // send the updates data to the backend
      const res = await apiRequest.put(`/users/${currentUser.id}`, {
        username,
        email,
        password,
        avatar:avatar[0]
      });
      // update user in context
      updateUser(res.data);

      //set sucess message and clear error

      // setSuccess("Updated Sucessfully!");
      // setError("");

      // optionally clear the sucess message after some time
      navigate("/profile");
    } catch (err) {
      console.log(err);
      setError(err.response.data.message);
    }
  };
  return (
    <div className="main-div">
      <div className="image-div">
        <img name="avatar" src={avatar[0] || currentUser.avatar || "/noavatar.png"} alt="" />
        <UploadWidget
          uwConfig={{
            cloudName: "dp4fh3lcj",
            uploadPreset: "HabiEstate",
            multiple: false,
            maxImageFileSize: 2000000,
            folder: "avatars",
          }}
          setState={setAvatar}
        />
      </div>
      <form onSubmit={handleSubmit} action="">
        <div className="update-form">
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                defaultValue={currentUser.username}
              />
            </div>
            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                defaultValue={currentUser.email}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="inputassword">Password</label>
              <input name="password" type="password" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                name="address"
                defaultValue={currentUser.address}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="phone">Phone no</label>
              <input type="tel" name="phone" defaultValue={currentUser.phone} />
            </div>
          </div>

          <div className="form-row">
            <button type="submit" className="submit-btn">
              Update
            </button>
            {error && <span>error</span>}
            {/* {success && <span>
            
            {success}</span>} */}
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProfileUpdatePage;
