import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import FriendList from "./components/FriendList";
import SplitBillForm from "./components/SplitBillForm";

function App() {
  const [friends, setFriends] = useState([
    { id: 1, name: "Liv", balance: -7, img: "https://i.pravatar.cc/48?img=1" },
    {
      id: 2,
      name: "Hoang",
      balance: 20,
      img: "https://i.pravatar.cc/48?img=2",
    },
    { id: 3, name: "Nam", balance: 0, img: "https://i.pravatar.cc/48?img=3" },
  ]);
  const updateBalance =(id,amount) => {
    setFriends(friends.map(friend => friend.id===id?{...friend,balance:friend.balance+amount}:friend
  
    ))
  }
  
  const [selectedFriend, setSelectedFriend] = useState(null);
  const handleSelectFriend = (friend) => {
    setSelectedFriend(friend);
  };
  const handleAddFriend = (newFriend) => {
    setFriends([...friends, newFriend]);
  };
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="container">
        <FriendList
          friends={friends}
          onSelectFriend={handleSelectFriend}
          onAddFriend={handleAddFriend}
        />
        <SplitBillForm friend={selectedFriend} updateValue={updateBalance}/>
      </div>
    </>
  );
}

export default App;
