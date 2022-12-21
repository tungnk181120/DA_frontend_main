import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Link as RouterLink, MemoryRouter } from 'react-router-dom';
import Sider from "../../../components/Sider/Sider";
import TakerManagerTab from '../../../components/Teacher/TakerManagerTab/TakerManagerTab';
import './TakerManagerDetail.scss'

function TakerManagerDetail() {
    const [value, setValue] = React.useState('one');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (
        <div className="test-outline-detail">
            <Sider taker_manager='true'></Sider>
            <div className="test-outline-detail-content">
                <TakerManagerTab tab_name={"one"}></TakerManagerTab>
                <div className="test-outline-detail-info">
                    <h2 className='test-outline-detail-info-header'>Thông tin chung</h2>
                    <div className="detail-element">
                        <span className="detail-element-header">Thời gian làm bài</span>
                        <span className="detail-element-content">30 phút</span>
                    </div>
                    <div className="detail-element">
                        <span className="detail-element-header">Giờ mở kíp</span>
                        <span className="detail-element-content">21/12/2022 20:00</span>
                    </div>
                    <div className="detail-element">
                        <span className="detail-element-header">Giờ đóng kíp</span>
                        <span className="detail-element-content">21/12/2022 20:30</span>
                    </div>
                    <div className="detail-element">
                        <span className="detail-element-header">Số câu hỏi</span>
                        <span className="detail-element-content">50 câu</span>
                    </div>
                    <div className="detail-element">
                        <span className="detail-element-header">Số thí sinh</span>
                        <span className="detail-element-content">50 thí sinh</span>
                    </div>
                    <div className="detail-element">
                        <span className="detail-element-header">Khung đề</span>
                        <span className="detail-element-content">Cấu trúc dữ liệu</span>
                    </div>
                </div>
                <Button variant="contained" color="success" className="btn-create-test-outline" 
                        component={RouterLink} to="/test-outline/create"
                        onClick={() => {
                    }}>
                        Chỉnh sửa thông tin kíp thi
                </Button>
            </div>            
        </div>
        
    );
}
    
    
export default TakerManagerDetail;