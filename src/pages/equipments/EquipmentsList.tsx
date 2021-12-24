import React, { useContext, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material';
import EquipmentContext from '../../contexts/EquipmentContext';
import Equipment from './Equipment';
import AddEquipment from './AddEquipment';
import '../../assets/styles/equipments-list.scss';
import WorkerContext from '../../contexts/WorkerContext';
import { useNavigate } from 'react-router';

const EquipmentsList = () => {
  const { state } = useContext(EquipmentContext);
  const { state: workerState } = useContext(WorkerContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (workerState.name === '') {
      navigate('/');
    }
  }, []);

  return (
    <div className="equipments-list-container">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <StyledTableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell align="right">Item&apos;s Name</TableCell>
              <TableCell align="right">Full Quantity</TableCell>
              <TableCell align="right">Current Quantity</TableCell>
              <TableCell align="right">Missing</TableCell>
              <TableCell align="right">Inserted By</TableCell>
            </TableRow>
          </StyledTableHead>
          <TableBody>
            {state.map((equip, i) => (
              <Equipment key={`equip-${i}`} equipment={equip} equipIndex={i} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <AddEquipment />
    </div>
  );
};

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const StyledTableHead = styled(TableHead)(() => ({
  fontSize: '600',
  backgroundColor: 'red',
}));

export default EquipmentsList;
