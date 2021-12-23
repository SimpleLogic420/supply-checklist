import React, { useContext } from 'react';
import FriendContext from '../contexts/FriendContext';
import Friend from './Friend';

const FriendsList = () => {
  const { state } = useContext(FriendContext);
  return (
    <div>
      {state.map(friend => (<Friend key={friend.id} friend={friend} />))}
    </div>
  );
};

export default FriendsList;