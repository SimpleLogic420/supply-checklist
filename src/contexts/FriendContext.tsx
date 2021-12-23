import React, { createContext, ReactNode, useReducer } from 'react';
import friendReducer from '../reducers/friendReducer';
import initialState from '../db/drillDB';
import { FriendContextInterface } from '../types/contexts/friend';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
const FriendContext = createContext<FriendContextInterface>();

const FriendProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(friendReducer, [...initialState]);
  return (
    <FriendContext.Provider value={{ state, dispatch }}>
      {children}
    </FriendContext.Provider>
  );
};

export default FriendContext;
export { FriendProvider };