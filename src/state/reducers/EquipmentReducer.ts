import {
  ADD_EQUIPMENT,
  REMOVE_ALL_USER_EQUIPMENTS,
  REMOVE_EQUIPMENT,
  UPDATE_EQUIPMENT,
} from '../actions/equipmentActions';
import { Action, Equipment } from '../../types/contexts/equipment';
function EquipmentReducer(state: Equipment[], action: Action) {
  switch (action.type) {
    case ADD_EQUIPMENT:
      return [...state, action.payload.equipment];
    case REMOVE_EQUIPMENT:
      return [
        ...state.filter((equip) => equip.id !== action.payload.equipment.id),
      ];
    case UPDATE_EQUIPMENT:
      const index = state.findIndex(
        (equip) => equip.id === action.payload.equipment.id
      );
      const equipment: Equipment = { ...action.payload.equipment };
      equipment.currentQuantity =
        action.payload.updateQuantity || equipment.currentQuantity;
      state[index] = { ...equipment };
      return [...state];
    case REMOVE_ALL_USER_EQUIPMENTS:
      return [
        ...state.filter(
          (equip) => equip.insertedBy !== action.payload.worker?.name
        ),
      ];
    default:
      return state;
  }
}

export default EquipmentReducer;
