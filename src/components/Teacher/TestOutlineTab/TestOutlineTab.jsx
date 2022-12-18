import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Link as RouterLink, MemoryRouter } from 'react-router-dom';
import Button from '@mui/material/Button';
import { FaStepBackward } from "react-icons/fa";
import './TestOutlineTab.scss'

function TestOutlineTab(props) {
    const [value, setValue] = React.useState(props.tab_name);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (
        <div className="test-outline-tab-div">  
            <div className="test-outline-detail-header">
                    <RouterLink to='/test-outline'>
                        <span className="back_icon" >
                            <FaStepBackward />
                        </span>  
                    </RouterLink>                                      
                    <span className="title-test-outline">Khung đề thi cấu liệu</span>
                    <Button variant="contained" color="success" className="btn-create-test-outline" 
                        component={RouterLink} to="/test-outline/create"
                        onClick={() => {
                    }}>
                        Sinh đề
                    </Button>
            </div>
            <Box sx={{ width: '100%' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    textColor="secondary"
                    indicatorColor="secondary"
                    aria-label="secondary tabs example"
                >
                    <Tab sx={{ fontSize: 12, fontWeight:'bold'}} value="one" label="Thông tin chung" to="/test-outline/detail/:id" component={RouterLink}/>
                    <Tab sx={{ fontSize: 12, fontWeight:'bold'}} value="two" label="Ma trận đề" to="/test-outline/detail/test-blueprint/:id" component={RouterLink}/>
                    <Tab sx={{ fontSize: 12, fontWeight:'bold'}} value="three" label="Ngân hàng câu hỏi" to="/test-outline/detail/question/:id" component={RouterLink}/>
                    <Tab sx={{ fontSize: 12, fontWeight:'bold'}} value="four" label="Ngân hàng đề thi" to="/test-outline/detail/test-form/:id" component={RouterLink}/>
                </Tabs>
            </Box>
        </div> 
    )
}

export default TestOutlineTab;