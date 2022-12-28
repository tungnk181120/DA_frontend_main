import * as React from 'react';
import Button from '@mui/material/Button';
import { Link as RouterLink, MemoryRouter } from 'react-router-dom';
import Sider from "../../../components/Sider/Sider";
import ClassTab from '../../../components/Teacher/ClassTab/ClassTab';
import './ClassDetail.scss'

function ClassDetail() {
    const [value, setValue] = React.useState('one');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (
        <div className="test-outline-detail">
            <Sider class='true'></Sider>
            <div className="test-outline-detail-content">
                <ClassTab tab_name={"one"}></ClassTab>
                <div className="test-outline-detail-info">
                    <h2 className='test-outline-detail-info-header'>Thông tin chung</h2>
                    <div className="detail-element">
                        <span className="detail-element-header">Sí số</span>
                        <span className="detail-element-content">12</span>
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
                        Chỉnh sửa thông tin lớp học
                </Button>
            </div>            
        </div>
        
    );
}
    
    
export default ClassDetail;