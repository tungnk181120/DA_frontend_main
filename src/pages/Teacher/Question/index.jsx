import Sider from "../../../components/Sider/Sider";
import QuestionList from "../../../components/Teacher/QuestionList/QuestionList";
import Button from '@mui/material/Button';
import { Link, MemoryRouter } from 'react-router-dom';
import './Question.scss'

function Question() {
    return (
        <div className="test-outline">
            <Sider questions='true'></Sider>
            <div className="test-outline-content">
                <div>
                    <span className="title-test-outline">Danh sách câu hỏi</span>
                    <Button variant="contained" color="success" className="btn-create-test-outline" 
                        component={Link} to="/questions/create"
                        onClick={() => {
                    }}>
                        Tạo câu hỏi
                    </Button>
                </div>
                <div className="test-outline-content-table">
                    <QuestionList></QuestionList>
                </div>             
                
            </div>
            
        </div>        
    )
}

export default Question;