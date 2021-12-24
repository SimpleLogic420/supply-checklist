import { Dispatch } from 'react';

export interface Equipment {
  name: string;
  fullQuantity: number;
  currentQuantity: number;
  id: string;
  insertedBy?: string;
}

export interface Action {
  type: string;
  payload: { equipment: Equipment; updateQuantity?: number };
}

export interface EquipmentContextInterface {
  state: Equipment[];
  dispatch: Dispatch<Action>;
}
