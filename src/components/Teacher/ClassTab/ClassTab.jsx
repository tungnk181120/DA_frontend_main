import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Link as RouterLink, MemoryRouter } from 'react-router-dom';
import Button from '@mui/material/Button';
import { FaStepBackward } from "react-icons/fa";
import './ClassTab.scss'

function ClassTab(props) {
    const [value, setValue] = React.useState(props.tab_name);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (
        <div className="test-outline-tab-div">  
            <div className="test-outline-detail-header">
                    <RouterLink to='/classes'>
                        <span className="back_icon" >
                            <FaStepBackward />
                        </span>  
                    </RouterLink>                                      
                    <span className="title-test-outline">Lớp cấu liệu sáng thứ 6</span>
                    {/* <Button variant="contained" color="success" className="btn-create-test-outline" 
                        component={RouterLink} to="/classes/create"
                        onClick={() => {
                    }}>
                        Sinh đề
                    </Button> */}
            </div>
            <Box sx={{ width: '100%' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    textColor="secondary"
                    indicatorColor="secondary"
                    aria-label="secondary tabs example"
                >
                    <Tab sx={{ fontSize: 12, fontWeight:'bold'}} value="one" label="Thông tin chung" to="/classes/detail/:id" component={RouterLink}/>
                    <Tab sx={{ fontSize: 12, fontWeight:'bold'}} value="two" label="Học sinh" to="/classes/detail/students/:id" component={RouterLink}/>
                    <Tab sx={{ fontSize: 12, fontWeight:'bold'}} value="three" label="Kíp thi" to="/classes/detail/question/:id" component={RouterLink}/>
                </Tabs>
            </Box>
        </div> 
    )
}

export default ClassTab;