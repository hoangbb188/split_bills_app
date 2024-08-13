import React, { useState } from "react";
function FriendItem({ friend, onSelect}) {
  const [isSelected,setSelected]=useState(false);
  const handleClick = ()=>{  onSelect(friend);
      setSelected(!isSelected);
  }
  const handleCompare =() =>{return friend.balance > 0 ? "owes" : friend.balance < 0 ? "owe" : "even";}
  const handleSelect= () =>{}
  return (
    <div className={`friend-item ${isSelected ? `active`:``}`}>
      <img src={friend.img} alt={friend.name} />
      <div className="friend-info">
        <p className="friend-name">{friend.name}</p>
        <p className={handleCompare()} >{handleCompare()==="owes"?`${friend.name} owes you $${friend.balance}`:
        handleCompare()==="owe"?`You owe ${friend.name} $${Math.abs(friend.balance)}`:`You and ${friend.name} are even` }</p>
      </div>
      <button className="btn select" onClick={handleClick}>{isSelected? 'Close' : 'Select'}</button>
    </div>
  );
}

export default FriendItem;

//friend#null
//isSelected=true
//1. friend = null, isSelect = false => can select => friend # null, isselect= true
//2. friend #null. isselect = true => block
//3. 