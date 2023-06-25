//not in use anymore

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 15
  }
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover
  },
  '&:last-child td, &:last-child th': {
    border: 5
  }
}));

function createData(prop1, prop2, prop3) {
  return { prop1, prop2, prop3 };
}

function Ntable({ data }) {
  const rows = [
    createData('ELECTRICITY', 'X'),
    createData('ROAD', 'X'),
    createData('WATER', 'X'),
    createData('SEWAGE', 'x'),
    createData('GARBAGE', 'X')
  ];

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 200 }} aria-label="customized table">
        <TableHead sx={{ color: 'red' }}>
          <TableRow>
            <StyledTableCell>Booking</StyledTableCell>
            <StyledTableCell align="center">Movie</StyledTableCell>
            <StyledTableCell align="center">Theatr&nbsp;</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <StyledTableRow key={row.DEPARTMENT}>
              <StyledTableCell component="th" scope="row">
                {row.DEPARTMENT}
              </StyledTableCell>
              <StyledTableCell align="center">{row.WARDNO}</StyledTableCell>
              <StyledTableCell align="center">{row.DETAILS}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Ntable;
