import StudentSidebar from '../../../components/Student/StudentSidebar/StudentSidebar';
import Button from '@mui/material/Button';
import { Link, MemoryRouter } from 'react-router-dom';
import StudentClassContent from '../../../components/Student/StudentClassContent/StudentClassContent';
import './Class.scss'

function StudentClass() {
    return (
        <div className="test-outline">
            <StudentSidebar lop_hoc='true'></StudentSidebar>
            <div className="test-outline-content">
                <div>
                    <span className="title-test-outline">Danh sách lớp học</span>
                    <Button variant="contained" color="success" className="btn-create-test-outline" 
                        component={Link} to="/class/create"
                        onClick={() => {
                    }}>
                        Tham gia lớp học
                    </Button>
                </div>
                <div className="test-outline-content-table">
                    <StudentClassContent></StudentClassContent>
                </div>             
                
            </div>
        </div>        
    )
}

export default StudentClass;