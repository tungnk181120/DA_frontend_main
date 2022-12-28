import * as React from 'react';
import Sider from "../../../components/Sider/Sider";
import ClassTab from '../../../components/Teacher/ClassTab/ClassTab';
import ClassStudentList from '../../../components/Teacher/ClassStudentList/ClassStudentList';

import './ClassStudent.scss'

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

function ClassStudent() {
    const [value, setValue] = React.useState('two');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (
        <div className="test-outline-detail">
            <Sider class='true'></Sider>
            <div className="test-outline-detail-content">
                
                <ClassTab tab_name={"two"}></ClassTab>
                <div className="test-outline-detail-info">
                    <ClassStudentList></ClassStudentList>
                </div>
            </div>            
        </div>
        
    );
}
    
    
export default ClassStudent;