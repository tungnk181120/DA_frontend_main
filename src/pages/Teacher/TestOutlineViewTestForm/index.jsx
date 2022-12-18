import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Link as RouterLink, MemoryRouter } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import Sider from "../../../components/Sider/Sider";
import TestOutlineTab from '../../../components/Teacher/TestOutlineTab/TestOutlineTab';
import './TestOutlineViewTestForm.scss'

function createData(name, id, n_question, n_question_created) {
    return { name, id, n_question, n_question_created };
  }
const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24),
    createData('Ice cream sandwich', 237, 9.0, 37),
    createData('Eclair', 262, 16.0, 24),
    createData('Cupcake', 305, 3.7, 67),
    createData('Gingerbread', 356, 16.0, 49),
];

function TestOutlineViewTestForm() {
    const [value, setValue] = React.useState('two');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (
        <div className="test-outline-detail">
            <Sider></Sider>
            <div className="test-outline-detail-content">
                <TestOutlineTab tab_name={"four"}></TestOutlineTab>
                <div className="test-outline-detail-info">
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 1100, border:2, borderColor:'#f6f6f6'}}>
                            <TableHead sx={{ bgcolor:'#f6f6f6',  }}>
                                <TableRow>
                                    <TableCell sx={{ fontSize: 15, fontWeight:'bold'}}>Tên đề</TableCell>
                                    <TableCell sx={{ fontSize: 15, fontWeight:'bold'}} align="center">Mã đề</TableCell>
                                    <TableCell sx={{ fontSize: 15, fontWeight:'bold'}} align="center">Mô tả</TableCell>
                                    <TableCell sx={{ fontSize: 15, fontWeight:'bold'}} align="center">Số câu hỏi đã tạo</TableCell>
                                    <TableCell sx={{ fontSize: 15, fontWeight:'bold'}} align="center">Hành động</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                <TableCell sx={{ fontSize: 15}} component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell sx={{ fontSize: 15}} align="center">{row.id}</TableCell>
                                <TableCell sx={{ fontSize: 15}} align="center">{row.n_question}</TableCell>
                                <TableCell sx={{ fontSize: 15}} align="center">{row.n_question_created}</TableCell>
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
                </div>
                <Button variant="contained" color="success" className="btn-create-test-outline" 
                        component={RouterLink} to="/test-outline/create"
                        onClick={() => {
                    }}>
                        Thêm đề
                </Button>
            </div>            
        </div>
        
    );
}
    
    
export default TestOutlineViewTestForm;