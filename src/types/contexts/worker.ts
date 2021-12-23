import { Dispatch } from "react";

export interface Worker {
  name: string;
  workPlace: string;
  date: string;
  id?: string;
}
export interface Action {
  type: string;
  payload: { worker: Worker };
}

export interface WorkerContextInterface {
  state: Worker;
  dispatch: Dispatch<Action>;
}
