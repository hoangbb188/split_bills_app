// src/components/AddFriendForm.js
import React, { useState } from "react";

const API_URL = 'http://localhost:8080/api/friends'; // Đảm bảo URL này chính xác

function AddFriendForm({ onAddFriend }) {
  const [isShowForm, setIsShowForm] = useState(false);
  const [friendImg, setFriendImg] = useState("");
  const [friendName, setFriendName] = useState("");

  const handleButtonAdd = () => {
    setIsShowForm(!isShowForm);
  };

  const handleAddFriend = async () => {
    if (friendName) {
      const imgUrl = friendImg || "https://i.pravatar.cc/48";
      const newFriend = { name: friendName, img: imgUrl, balance: 0 };

      try {
        const response = await fetch(API_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newFriend),
        });

        if (response.ok) {
          const addedFriend = await response.json();
          onAddFriend(addedFriend);
          setFriendName("");
          setFriendImg("");
          setIsShowForm(false); // Đóng form sau khi thêm bạn bè
        } else {
          console.error('Error adding friend:', response.statusText);
        }
      } catch (error) {
        console.error('Error adding friend:', error);
      }
    }
  };

  return (
    <div>
      {isShowForm ? (
        <div className="add-close-friend">
          <div className="add-friend">
            <div className="input-group">
              <label>
                <img src="friend.png" alt="Friend name" />
                Friend name
              </label>
              <input
                type="text"
                placeholder="Your friend name"
                value={friendName}
                onChange={(e) => {
                  setFriendName(e.target.value);
                }}
              />
            </div>
            <div className="input-group">
              <label>
                <img src="camera.png" alt="Camera" />
                Image URL
              </label>
              <input
                type="text"
                placeholder="https://i.pravatar.cc/48"
                value={friendImg}
                onChange={(e) => {
                  setFriendImg(e.target.value);
                }}
              />
            </div>
            <button className="btn add" onClick={handleAddFriend}>
              Add
            </button>
          </div>
          <button className="btn close" onClick={handleButtonAdd}>
            Close
          </button>
        </div>
      ) : (
        <button className="add_friend_option" onClick={handleButtonAdd}>
          Add more Friend
        </button>
      )}
    </div>
  );
}

export default AddFriendForm;