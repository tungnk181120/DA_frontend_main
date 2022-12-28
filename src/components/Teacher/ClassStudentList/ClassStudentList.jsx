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
import './ClassStudentList.scss'

function createData(stt, id, name, time, state) {
  return { stt, id, name, time, state };
}

const rows = [
  createData(1, 11,'Frozen yoghurt', 'Đang làm bài', 6.0, 24, 'Chưa bắt đầu'),
  createData(2, 12,'Ice cream sandwich', 'Chưa vào thi', 9.0, 37, 'Chưa bắt đầu'),
  createData(3, 13, 'Eclair', 'Đang làm bài', 16.0, 24, 'Chưa bắt đầu'),
  createData(4, 14, 'Cupcake', 'Đang làm bài', 3.7, 67, 'Chưa bắt đầu'),
  createData(5, 15, 'Gingerbread', 'Đang làm bài', 16.0, 49, 'Chưa bắt đầu'),
];

function ClassStudentList() {
  return (
    <Typography component="div">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 1100, border:2, borderColor:'#f6f6f6'}} >
          <TableHead sx={{ bgcolor:'#f6f6f6',  }}>
            <TableRow>
              <TableCell sx={{ fontSize: 15, fontWeight:'bold'}}>
                STT
              </TableCell>
              <TableCell sx={{ fontSize: 15, fontWeight:'bold'}} align="center">ID học sinh</TableCell>
              <TableCell sx={{ fontSize: 15, fontWeight:'bold'}} align="center">Họ và tên</TableCell>
              <TableCell sx={{ fontSize: 15, fontWeight:'bold'}} align="center">Hành động</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.stt}
                sx={{ '&:last-child td, &:last-child th': { border: 0 }, }}
              >
                <TableCell component="th" scope="row" sx={{ fontSize: 15}}>
                  {row.stt}
                </TableCell>                
                <TableCell sx={{ fontSize: 15}} align="center">{row.id}</TableCell>
                <TableCell sx={{ fontSize: 15}} align="center">{row.name}</TableCell>
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


export default ClassStudentList;