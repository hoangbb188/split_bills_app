
import React from 'react';
import FriendItem from '../component/frienditem';

function FriendList({ friends }) {
    const usfrs =  [{ id: 1,name:'Lan' }, { id: 2, name: 'Huy' }, { id: 3, name: 'Son' }];
    return (
        <div className="friend-list">
            {usfrs.map((friend) => (
                <FriendItem key={friend.id} {...friend} />
            ))}
        </div>
    );
}

export default FriendList;