import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Link as RouterLink, MemoryRouter } from 'react-router-dom';
import Sider from "../../../components/Sider/Sider";
import TestFormTab from '../../../components/Teacher/TestFormTab/TestFormTab';
import QuestionList from '../../../components/Teacher/QuestionList/QuestionList';
import './TestFormContent.scss'

function TestFormContent() {
    const [value, setValue] = React.useState('one');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (
        <div className="test-outline-detail">
            <Sider test_form='true'></Sider>
            <div className="test-outline-detail-content">
                <TestFormTab tab_name={"two"}></TestFormTab>
                <div className="test-outline-detail-info">
                    <QuestionList></QuestionList>
                </div>
            </div>            
        </div>
        
    );
}
    
    
export default TestFormContent;