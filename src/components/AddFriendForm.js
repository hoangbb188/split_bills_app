import React, { useState } from "react";

function AddFriendForm(onAddFriend) {
const [isShowForm,setIsShowForm] = useState(false);

const handleButtonAdd = () => {
  setIsShowForm(!isShowForm)
}
const [friendImg,setFriendImg] = useState("");
const [friendURL,setFriendURL] = useState("");
const friendAdd(friendImg,friendURL);


  return ( <div>

  {isShowForm?(   <div className="add-close-friend">
    <div className="add-friend">
      <div className="input-group">
        <label>
          <img src="friend.png" alt="Friend name" />
          Friend name
        </label>
        <input type="text" placeholder="Your friend name" />
      </div>
      <div className="input-group">
        <label>
          <img src="camera.png" alt="Camera" />
          Image URL
        </label>
        <input type="text" placeholder="https://pravatar.cc/" />
      </div>
      <button className="btn add">Add</button>
    </div>
    <button className="btn close" onClick={handleButtonAdd}>Close</button>
  </div>) :(<button className='add_friend_option' onClick={handleButtonAdd}>Add more Friend</button> )}
  </div>
  );
}

export default AddFriendForm;
