import * as React from 'react';

import {blue, green, red} from '@mui/material/colors'

import { Checkbox } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export default function BasicTable(props) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow style={{ backgroundColor: blue[300] }}>
            <TableCell>Student</TableCell>
            <TableCell align="right">Injection Complete</TableCell>
            <TableCell align="right">Scalpel Complete</TableCell>
            <TableCell align="right">Help Requested</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.students.map((student) => (
            <TableRow
              key={student.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              style={{ backgroundColor: student.needsHelp ? red[100] : green[100] }}
            >
              <TableCell component="th" scope="row">
                {student.name}
              </TableCell>
              <TableCell align="right"><Checkbox disabled checked={student.didShot}/></TableCell>
              <TableCell align="right"><Checkbox disabled checked={student.didScalpel}/></TableCell>
              <TableCell align="right"><Checkbox disabled checked={student.needsHelp}/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
