import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Link as RouterLink, MemoryRouter } from 'react-router-dom';
import Button from '@mui/material/Button';
import { FaStepBackward } from "react-icons/fa";
import './TakerManagerTab.scss'

function TakerManagerTab(props) {
    const [value, setValue] = React.useState(props.tab_name);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (
        <div className="test-outline-tab-div">  
            <div className="test-outline-detail-header">
                    <RouterLink to='/taker-manager'>
                        <span className="back_icon" >
                            <FaStepBackward />
                        </span>  
                    </RouterLink>                                      
                    <span className="title-test-outline">Cấu liệu giữa kì kíp 4</span>
                    {/* <Button variant="contained" color="success" className="btn-create-test-outline" 
                        component={RouterLink} to="/taker-manager/create"
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
                    <Tab sx={{ fontSize: 12, fontWeight:'bold'}} value="one" label="Thông tin chung" to="/taker-manager/detail/:id" component={RouterLink}/>
                    <Tab sx={{ fontSize: 12, fontWeight:'bold'}} value="two" label="Thí sinh" to="/taker-manager/detail/student/:id" component={RouterLink}/>
                    {/* <Tab sx={{ fontSize: 12, fontWeight:'bold'}} value="three" label="Ngân hàng câu hỏi" to="/taker-manager/detail/question/:id" component={RouterLink}/>
                    <Tab sx={{ fontSize: 12, fontWeight:'bold'}} value="four" label="Ngân hàng đề thi" to="/taker-manager/detail/test-form/:id" component={RouterLink}/> */}
                </Tabs>
            </Box>
        </div> 
    )
}

export default TakerManagerTab;