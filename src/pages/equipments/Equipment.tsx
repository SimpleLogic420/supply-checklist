import React, { useContext, useState } from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

import { Equipment as EquipmentType } from '../../types/contexts/equipment';
import EquipmentContext from '../../contexts/EquipmentContext';
import {
  UPDATE_EQUIPMENT,
  REMOVE_EQUIPMENT,
} from '../../state/actions/equipmentActions';
import WorkerContext from '../../contexts/WorkerContext';

const Equipment = ({
  equipment,
  equipIndex,
}: {
  equipment: EquipmentType;
  equipIndex: number;
}) => {
  const [missing, setMissing] = useState(
    equipment.fullQuantity - equipment.currentQuantity
  );
  const { dispatch } = useContext(EquipmentContext);
  const { state: workerState } = useContext(WorkerContext);
  return (
    <TableRow
      key={equipment.name}
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      style={{ backgroundColor: equipIndex % 2 === 0 ? '' : 'gainsboro' }}
    >
      <TableCell component="th" scope="row">
        {equipIndex + 1}
      </TableCell>
      <TableCell align="right">{equipment.name}</TableCell>
      <TableCell align="right">{equipment.fullQuantity}</TableCell>
      <TableCell align="right">
        <input
          id={`${equipment.id}-input`}
           type={'number'}
          defaultValue={equipment.currentQuantity}
          min={0}
          max={equipment.fullQuantity}
          onChange={({ target: { value } }) => {
            setMissing(equipment.fullQuantity - Number(value));
            dispatch({
              type: UPDATE_EQUIPMENT,
              payload: { equipment, updateQuantity: Number(value) },
            });
          }}
        />
      </TableCell>
      <TableCell align="right">{missing}</TableCell>
      <TableCell align="right">
        {equipment.insertedBy}{' '}
        {equipment.insertedBy === workerState.name ? (
          <button
            onClick={() =>
              dispatch({ type: REMOVE_EQUIPMENT, payload: { equipment } })
            }
          >
            remove
          </button>
        ) : (
          ''
        )}
      </TableCell>
    </TableRow>
  );
};

export default Equipment;
