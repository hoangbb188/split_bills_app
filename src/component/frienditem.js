
function FriendItem({ name, imageUrl, balance }) {
    return (
      <div className="friend-item">
        {/* <img src={imageUrl} alt={name} /> */}
        <div>
          <p>{name}</p>
          <p>{balance}</p>
        </div>
        {/* <button>Select</button> */}
        <button className="form-button">Close</button>
      </div>
    );
  }



  export default FriendItem