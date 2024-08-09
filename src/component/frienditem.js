import styled from 'styled-components';
function FriendItem({ name, imageUrl, balance }) {
    return (
      <div className="friend-item">
        <img src={imageUrl} alt={name} />
        <div>
          <p>{name}</p>
          <p>{balance}</p>
        </div>
        <button>Select</button>
        <button>Close</button>
      </div>
    );
  }

FriendItem = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
`;

  export default FriendItem