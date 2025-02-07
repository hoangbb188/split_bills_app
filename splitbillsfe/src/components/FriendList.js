import React,{useEffect,useState} from "react";
import FriendItem from "./FriendItem";
import AddFriendForm from "./AddFriendForm";


function FriendList({
  friends,
  selectedFriend,
  onSelectFriend,
  onDeselectFriend,
  onAddFriend,
}
) {
  return (
    <div className="friends-list">
      {friends.map((friend) => (
        <FriendItem
        key={friend.id}
          friend={friend}
          isSelected={selectedFriend?.id === friend.id}
          onSelect={onSelectFriend}
          onDeselect={onDeselectFriend}
        />
      ))}
      <AddFriendForm onAddFriend={onAddFriend} />
    </div>
  );
}

export default FriendList;
