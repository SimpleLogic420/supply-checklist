import {
  INITIAL_STATE,
  ADD_FRIEND,
  REMOVE_FRIEND,
  UPDATE_FRIEND,
} from '../actions/actions';
import initialState from '../db/drillDB';
import { Action, Friend } from '../types/contexts/friend';

const friendReducer = (state: Friend[], action: Action) => {
  switch (action.type) {
    case INITIAL_STATE:
      return [...initialState];
    case ADD_FRIEND:
      console.log(action);
      return [...state, action.payload.friend];
    case REMOVE_FRIEND:
      const target = action.payload.friend;
      const newState = state.filter((f) => {
        return f.name !== target.name || f.age !== target.age;
      });
      return newState;
    case UPDATE_FRIEND:
      const friendT = action.payload.friend;
      const updated: Friend = action.payload.updated ? { ...action.payload.updated } : { ...action.payload.friend };
      const updatedState = [...state];
      for (let i = 0; i < updatedState.length; i++) {
        if (
          updatedState[i].name === friendT.name &&
          updatedState[i].age === friendT.age
        ) {
          updatedState[i] = updated;
          break;
        }
      }
      return updatedState;
    default:
      return [...state];
  }
};

export default friendReducer;