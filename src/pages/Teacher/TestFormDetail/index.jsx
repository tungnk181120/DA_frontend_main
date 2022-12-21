import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Link as RouterLink, MemoryRouter } from 'react-router-dom';
import Sider from "../../../components/Sider/Sider";
import TestFormTab from '../../../components/Teacher/TestFormTab/TestFormTab';
import './TestFormDetail.scss'

function TestFormDetail() {
    const [value, setValue] = React.useState('one');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (
        <div className="test-outline-detail">
            <Sider test_form='true'></Sider>
            <div className="test-outline-detail-content">
                <TestFormTab tab_name={"one"}></TestFormTab>
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
                        <span className="detail-element-header">Mã đề</span>
                        <span className="detail-element-content">113</span>
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
    
    
export default TestFormDetail;