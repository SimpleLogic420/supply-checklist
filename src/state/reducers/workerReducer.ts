import { Action, Worker } from "../../types/contexts/worker";
import {ADD_WORKER,REMOVE_WORKER} from "../actions/actions";
function workerReducer(state:Worker, action:Action) {
    switch (action.type) {
      case ADD_WORKER:
        return { ...action.payload.worker };
      case REMOVE_WORKER:
        return {};
      default:
        return {...state};
    }
  }

  export default workerReducer;