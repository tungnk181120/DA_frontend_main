import Sider from "../../../components/Sider/Sider";
import ClassContent from "../../../components/Teacher/ClassContent/ClassContent";
import Button from '@mui/material/Button';
import { Link, MemoryRouter } from 'react-router-dom';
import './Class.scss'

function Class() {
    return (
        <div className="test-outline">
            <Sider class='true'></Sider>
            <div className="test-outline-content">
                <div>
                    <span className="title-test-outline">Danh sách lớp học</span>
                    <Button variant="contained" color="success" className="btn-create-test-outline" 
                        component={Link} to="/class/create"
                        onClick={() => {
                    }}>
                        Tạo lớp học
                    </Button>
                </div>
                <div className="test-outline-content-table">
                    <ClassContent></ClassContent>
                </div>             
                
            </div>
        </div>        
    )
}

export default Class;