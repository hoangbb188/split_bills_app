import React, { useState } from "react";
function FriendItem({ friend, onSelect}) {
  const [isSelected,setSelected]=useState(false);
  const handleClick = ()=>{  onSelect(friend);
      setSelected(!isSelected);
  }
  return (
    <div className={`friend-item ${isSelected ? `active`:``}`}>
      <img src={friend.img} alt={friend.name} />
      <div className="friend-info">
        <p className="friend-name">{friend.name}</p>
        <p 
        >You and {friend.name} are even</p>
      </div>
      <button className="btn select" onClick={handleClick}>{isSelected? 'Close' : 'Select'}</button>
    </div>
  );
}

export default FriendItem;
