import React, { useState } from "react";

function AddFriendForm() {
  return (
    <div className="add-friend">
      <div className="input-group">
        <label>
          <img src="" alt="" />
          Friend name
        </label>
        <input type="text" placeholder="" />
      </div>
      <div className="input-group">
        <label>
          <img src="" alt="" />
          Image URL
        </label>
        <input type="text" placeholder="https://pravatar.cc/" />
      </div>
      <button className="btn add">Add</button>
    </div>
  );
}

export default AddFriendForm;
