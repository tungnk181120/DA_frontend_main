import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Link as RouterLink, MemoryRouter } from 'react-router-dom';
import Sider from "../../../components/Sider/Sider";
import TestOutlineTab from '../../../components/Teacher/TestOutlineTab/TestOutlineTab';
import './TestOutlineDetail.scss'

function TestOutlineDetail() {
    const [value, setValue] = React.useState('one');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (
        <div className="test-outline-detail">
            <Sider></Sider>
            <div className="test-outline-detail-content">
                {/* <div className="test-outline-detail-header">
                    <span className="title-test-outline">Danh sách khung đề thi</span>
                    <Button variant="contained" color="success" className="btn-create-test-outline" 
                        component={RouterLink} to="/test-outline/create"
                        onClick={() => {
                    }}>
                        Sinh đề
                    </Button>
                </div> */}
                {/* <Box sx={{ width: '100%' }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        textColor="secondary"
                        indicatorColor="secondary"
                        aria-label="secondary tabs example"
                    >
                        <Tab value="one" label="Thông tin chung" to="/test-outline/detail/:id" component={RouterLink}/>
                        <Tab value="two" label="Ma trận đề" to="/test-outline/detail/test-blueprint/:id" component={RouterLink}/>
                        <Tab value="three" label="Ngân hàng câu hỏi" to="/test-outline/detail/question/:id" component={RouterLink}/>
                        <Tab value="four" label="Ngân hàng đề thi" to="/test-outline/detail/test-form/:id" component={RouterLink}/>
                    </Tabs>
                </Box> */}
                <TestOutlineTab tab_name={"one"}></TestOutlineTab>
                <div className="test-outline-detail-info">
                    <h2 className='test-outline-detail-info-header'>Thông tin chung</h2>
                    <div className="detail-element">
                        <span className="detail-element-header">Thời gian làm bài</span>
                        <span className="detail-element-content">120 phút</span>
                    </div>
                    <div className="detail-element">
                        <span className="detail-element-header">Số câu hỏi</span>
                        <span className="detail-element-content">50 câu</span>
                    </div>
                    <div className="detail-element">
                        <span className="detail-element-header">Số đề</span>
                        <span className="detail-element-content">50 đề</span>
                    </div>
                    <div className="detail-element">
                        <span className="detail-element-header">Môn học</span>
                        <span className="detail-element-content">Cấu trúc dữ liệu</span>
                    </div>
                </div>
                <Button variant="contained" color="success" className="btn-create-test-outline" 
                        component={RouterLink} to="/test-outline/create"
                        onClick={() => {
                    }}>
                        Chỉnh sửa khung đề thi
                </Button>
            </div>            
        </div>
        
    );
}
    
    
export default TestOutlineDetail;