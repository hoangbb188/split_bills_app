import logo from './logo.svg';
import './App.css';
import Share from './Form/sharebill';
import AddFriend from './Form/appfr';
import FriendList from './Form/friend';
function App() {
  const friends= ['Hy','Ly','Son'];
  return (
    <div className="App">
      <header className="App-header">
        { <FriendList/> }
        <AddFriend/>
        <Share name="hello" />
      </header>
    </div>
  );
}

export default App;
