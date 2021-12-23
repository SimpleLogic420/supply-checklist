
import {ADD_ITEM,REMOVE_ITEM,UPDATE_ITEMLIST} from "../actions/equipmentActions";
import {Action,Equipment} from "../../types/contexts/equipment";
function EquipmentReducer(state:Equipment, action:Action) {
    switch (action.type) {
      case ADD_ITEM:
        return { ...action.payload.equipment };
      case REMOVE_ITEM:
        return {};
        case UPDATE_ITEMLIST:
            return {};
      default:
        return {...state};
    }
  }

  export default EquipmentReducer;