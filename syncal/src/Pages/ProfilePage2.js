import React, { useState } from 'react';
import './css/Profile.css';
import Navegationbar from './components/navbar';

const ProfilePage2 = () => {
  // Replace with your logic to fetch user data
  const user = {
    name: 'Rafael',
    lastname: 'Leão',
    email: 'RafaelLeão@example.com',
    country: 'Portugal',
    city: 'Almada',

    // Add more user details as needed
  };

  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isFriend, setIsFriend] = useState(false);
  const [isModalFriendOpen, setIsModalFriendOpen] = useState(false);

  const handleAddFriend = () => {
    setIsFriend((prevIsFriend) => !prevIsFriend);

    if (!isFriend) {
      setIsModalFriendOpen(true);
    } else {
      setIsModalFriendOpen(false);
    };
  };

  const handleCloseFriendModal = () => {
    setIsModalFriendOpen(false);
  };

  return (
    <>
      <Navegationbar />
      <div id="profile-div">

        <div className={`profile-container ${isHovered ? 'hovered' : ''}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)} id="leftprofile2">

          <img src={require("./images/rafaelL.jpg")} alt="profile" className="profile-img" />
          <h2 id="jdname">Rafael Leão</h2>
          {isHovered && (
            <img id="configbutp" src={require("./images/settings-icon-13.png")} ></img>
          )}
        </div>

        <div className={`profile-container ${isHovered2 ? 'hovered2' : ''}`}
          onMouseEnter={() => setIsHovered2(true)}
          onMouseLeave={() => setIsHovered2(false)} id="rightprofile">
          {isHovered2 && (
            <img id="configbutp" src={require("./images/settings-icon-13.png")} ></img>
          )}

          <button onClick={handleAddFriend} id="add-friend-button">
            {isFriend ? 'Friend Requested' : 'Add Friend +'}
          </button>

          <h2 id="profileh2">Profile Page</h2>

          <div className="profile-details">
            <div className="profile-details-item">
              <h3 className="profile-details-item-title">First Name:</h3>
              <p className="profile-details-item-value">{user.name}</p>
            </div>
            <div className="profile-details-item">
              <h3 className="profile-details-item-title"> Last Name:</h3>
              <p className="profile-details-item-value">{user.lastname}</p>
            </div>
            <div className="profile-details-item">
              <h3 className="profile-details-item-title"> Email:</h3>
              <p className="profile-details-item-value">{user.email}</p>
            </div>
            <div className="profile-details-item">
              <h3 className="profile-details-item-title"> Country:</h3>
              <p className="profile-details-item-value">{user.country}</p>
            </div>
            <div className="profile-details-item">
              <h3 className="profile-details-item-title"> City:</h3>
              <p className="profile-details-item-value">{user.city}</p>
            </div>
          </div>
        </div>
      </div>

      {isModalFriendOpen && (
        <div id="modaladdfriend" className={`add-friend-modal ${isModalFriendOpen ? 'open' : ''}`}>
          <div className="add-friend-modal-content">
            <h3>Wait for {user.name} to accept.</h3>
            <button id="closefriendmodal" onClick={handleCloseFriendModal}>Close</button>
          </div>
        </div>
      )
      }
    </>
  );
};

export default ProfilePage2;
