import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import { Link as RouterLink, MemoryRouter } from 'react-router-dom';
import './TestOutlineContent.scss'

function createData(name, id, subject, time) {
  return { name, id, subject, time };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24),
  createData('Ice cream sandwich', 237, 9.0, 37),
  createData('Eclair', 262, 16.0, 24),
  createData('Cupcake', 305, 3.7, 67),
  createData('Gingerbread', 356, 16.0, 49),
];

function TestOutlineContent() {
  return (
    <Typography component="div">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 1100, border:2, borderColor:'#f6f6f6'}} >
          <TableHead sx={{ bgcolor:'#f6f6f6',  }}>
            <TableRow>
              <TableCell sx={{ fontSize: 15, fontWeight:'bold'}}>
                Tên khung đề
              </TableCell>
              <TableCell sx={{ fontSize: 15, fontWeight:'bold'}} align="center">Mã khung đề</TableCell>
              <TableCell sx={{ fontSize: 15, fontWeight:'bold'}} align="center">Môn học</TableCell>
              <TableCell sx={{ fontSize: 15, fontWeight:'bold'}} align="center">Thời gian</TableCell>
              <TableCell sx={{ fontSize: 15, fontWeight:'bold'}} align="center">Hành động</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 }, }}
              >
                <RouterLink to='/test-outline/detail/:id'>
                  <TableCell component="th" scope="row" sx={{ fontSize: 15, color:'blue'}}>
                    {row.name}
                  </TableCell>
                </RouterLink>
                
                <TableCell sx={{ fontSize: 15}} align="center">{row.id}</TableCell>
                <TableCell sx={{ fontSize: 15}} align="center">{row.subject}</TableCell>
                <TableCell sx={{ fontSize: 15}} align="center">{row.time}</TableCell>
                <TableCell sx={{ fontSize: 15}} align="center">
                    <span className="icon"><FaEdit /></span>
                    <span className='space'></span>
                    <span className="icon"><FaTrashAlt /></span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Typography>
    
  );
}


export default TestOutlineContent;