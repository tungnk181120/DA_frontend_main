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
import './QuestionList.scss'

function createData(question_id, content, test_outline, topic) {
  return { question_id, content, test_outline, topic };
}

const rows = [
  createData('1123', 159, [1,2,3,4], 6, 24),
  createData('1142', 237, [1,2,3,4], 6, 37),
  createData('1314', 262, [1,2,3,4], 6, 24),
  createData('1231', 305, [1,2,3,4], 6, 67),
];

function QuestionList() {
  return (
    <Typography component="div">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 1100, border:2, borderColor:'#f6f6f6'}} >
          <TableHead sx={{ bgcolor:'#f6f6f6',  }}>
            <TableRow>
              <TableCell sx={{ fontSize: 15, fontWeight:'bold'}}>
                Mã câu hỏi
              </TableCell>
              <TableCell sx={{ fontSize: 15, fontWeight:'bold'}} align="center">Nội dung câu hỏi</TableCell>
              <TableCell sx={{ fontSize: 15, fontWeight:'bold'}} align="center">Câu trả lời</TableCell>
              <TableCell sx={{ fontSize: 15, fontWeight:'bold'}} align="center">Khung đề</TableCell>
              <TableCell sx={{ fontSize: 15, fontWeight:'bold'}} align="center">Chủ đề</TableCell>
              <TableCell sx={{ fontSize: 15, fontWeight:'bold'}} align="center">Hành động</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.question_id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 }, }}
              >
                <TableCell component="th" scope="row" sx={{ fontSize: 15}}>
                {row.question_id}
                </TableCell>                
                <TableCell sx={{ fontSize: 15}} align="center">{row.content}</TableCell>
                <TableCell sx={{ fontSize: 15}} align="center">
                    <div className="answers">
                        <span className="answer-a">A. 1</span>
                        <span className="answer-b">B. 2</span>
                        <span className="answer-c">C. 3</span>
                        <span className="answer-d">D. 4</span>
                    </div>
                </TableCell>
                <TableCell sx={{ fontSize: 15}} align="center">{row.test_outline}</TableCell>
                <TableCell sx={{ fontSize: 15}} align="center">{row.topic}</TableCell>
                <TableCell sx={{ fontSize: 15}} align="center">
                  <RouterLink to='/questions/edit/:id'>
                  <span className="icon"><FaEdit /></span>
                  </RouterLink>                    
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


export default QuestionList;