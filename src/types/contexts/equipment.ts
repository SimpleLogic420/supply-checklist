import { Dispatch } from 'react';
import { Worker } from './worker';

export interface Equipment {
  name: string;
  fullQuantity: number;
  currentQuantity: number;
  id: string;
  insertedBy?: string;
}

export interface Action {
  type: string;
  payload: { equipment: Equipment; updateQuantity?: number; worker?: Worker };
}

export interface EquipmentContextInterface {
  state: Equipment[];
  dispatch: Dispatch<Action>;
}
