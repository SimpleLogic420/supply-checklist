import React, { useReducer, createContext, ReactNode } from "react";
import workerReducer from "../state/reducers/workerReducer";
import { WorkerContextInterface, Worker } from "../types/contexts/worker";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const WorkerContext = createContext<WorkerContextInterface>();
const initial_state:Worker={
    name: "",
    workPlace: "",
    date: "",
  };
function WorkerProvider({ children }:{children:ReactNode}) {
    
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const [state, dispatch] = useReducer(workerReducer, initial_state);

  return (
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    <WorkerContext.Provider value={{ state, dispatch }}>
      {children}
    </WorkerContext.Provider>
  );
}

export default WorkerContext;
export { WorkerProvider };
