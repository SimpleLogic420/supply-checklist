import { Dispatch } from "react";

export interface Equipment {
  name: string,
  fullQuantity: number,
  currentQuantity: number,
  id?: string,
}

export interface Action {
  type: string;
  payload: { equipment: Equipment };
}

export interface EquipmentContextInterface {
  state: Equipment[];
  dispatch: Dispatch<Action>;
}