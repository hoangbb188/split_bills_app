import React from "react";
import FriendItem from "./FriendItem";
import AddFriendForm from "./AddFriendForm";
function FriendList({ friends , onSelectFriend, onAddFriend }) {
  
  
  return (
    <div className="friends-list">
      {friends.map((friend) => (
        <FriendItem key={friend.id} friend={friend} onSelect={onSelectFriend}/>
      ))}
      <AddFriendForm onAddFriend = {onAddFriend} />
    </div>
  );
}

export default FriendList;
