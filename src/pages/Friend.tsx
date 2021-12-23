import React, { useContext } from 'react';
import { REMOVE_FRIEND } from '../actions/actions';
import FriendContext from '../contexts/FriendContext';
import { Friend as FriendType } from '../types/contexts/friend';

const Friend = ({ friend }: { friend: FriendType }) => {
  const { dispatch } = useContext(FriendContext);
  return (
    <div>
      {friend.name}, {friend.age}
      <button onClick={() => {
        dispatch({ type: REMOVE_FRIEND, payload: { friend: friend } });
      }}>Remove</button>
    </div>
  );
};

export default Friend;
