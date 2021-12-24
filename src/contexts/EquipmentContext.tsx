import React, { useReducer, createContext, ReactNode } from 'react';
import { EquipmentContextInterface } from '../types/contexts/equipment';
import equipmentReducer from '../state/reducers/EquipmentReducer';
import initial_state from '../db/EquipDb';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const EquipmentContext = createContext<EquipmentContextInterface>();

// const initial_state: Equipment[] = [
//   {
//     name: "",
//     fullQuantity: 0,
//     currentQuantity: 0,
//   }
// ];

const EquipmentProvider = ({ children }: { children: ReactNode }) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const [state, dispatch] = useReducer(equipmentReducer, [...initial_state]);
  return (
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    <EquipmentContext.Provider value={{ state, dispatch }}>
      {children}
    </EquipmentContext.Provider>
  );
};

export default EquipmentContext;
export { EquipmentProvider };
