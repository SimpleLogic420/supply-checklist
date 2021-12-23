import { Dispatch } from "react";

export interface Friend {
  id?: string;
  name: string;
  age: number;
}

export interface Action {
  type: string;
  payload: { friend: Friend, updated?: Friend };
}

export interface FriendContextInterface {
  state: Friend[];
  dispatch: Dispatch<Action>
}