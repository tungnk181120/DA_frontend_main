import Sider from "../../../components/Sider/Sider";
import TestOutlineContent from "../../../components/Teacher/TestOutlineContent/TestOutlineContent";
import Button from '@mui/material/Button';
import { Link, MemoryRouter } from 'react-router-dom';
import './TestOutline.scss'

function TestOutline() {
    return (
        <div className="test-outline">
            <Sider></Sider>
            <div className="test-outline-content">
                <div>
                    <span className="title-test-outline">Danh sách khung đề thi</span>
                    <Button variant="contained" color="success" className="btn-create-test-outline" 
                        component={Link} to="/test-outline/create"
                        onClick={() => {
                    }}>
                        Tạo khung đề thi
                    </Button>
                </div>
                <div className="test-outline-content-table">
                    <TestOutlineContent></TestOutlineContent>
                </div>             
                
            </div>
            
        </div>        
    )
}

export default TestOutline;