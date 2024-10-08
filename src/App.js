import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import FriendList from "./components/FriendList";
import SplitBillForm from "./components/SplitBillForm";

const API_URL = 'http://localhost:8080/api/friends';

function App() {
  const [friends, setFriends] = useState([]);
  const [selectedFriend, setSelectedFriend] = useState(null);

  useEffect(() => {
    const fetchFriends = async () => {
      try {
        const response = await fetch(`${API_URL}?userEmail=user@example.com`);
        const data = await response.json();
        setFriends(data);
      } catch (error) {
        console.error('Error fetching friends:', error);
      }
    };

    fetchFriends();
  }, []);

  const handleSelectFriend = (friend) => {
    setSelectedFriend(friend);
  };

  const handleDeselectFriend = () => {
    setSelectedFriend(null);
  };

  const handleAddFriend = (newFriend) => {
    setFriends([...friends, newFriend]);
  };

  const updateBalance = async (id, amount) => {
    try {
      const friendToUpdate = friends.find(friend => friend.id === id);
      const updatedFriend = { ...friendToUpdate, balance: friendToUpdate.balance + amount };

      const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedFriend),
      });

      if (response.ok) {
        setFriends(friends.map(friend => friend.id === id ? updatedFriend : friend));
      } else {
        console.error('Error updating balance:', response.statusText);
      }
    } catch (error) {
      console.error('Error updating balance:', error);
    }
  };

  return (
    <>
      <div>
        <Header />
      </div>
      <div className={`container ${selectedFriend ? 'active' : ''}`}>
        <FriendList
          friends={friends}
          selectedFriend={selectedFriend}
          onSelectFriend={handleSelectFriend}
          onDeselectFriend={handleDeselectFriend}
          onAddFriend={handleAddFriend}
        />
        {selectedFriend && (
          <SplitBillForm friend={selectedFriend} updateValue={updateBalance} />
        )}
      </div>
    </>
  );
}

export default App;
