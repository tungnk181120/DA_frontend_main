import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Link as RouterLink, MemoryRouter } from 'react-router-dom';

function TestOutlineTab() {
    const [value, setValue] = React.useState('two');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (
        <div className="test-outline-tab-div">  
            <Box sx={{ width: '100%' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    textColor="secondary"
                    indicatorColor="secondary"
                    aria-label="secondary tabs example"
                >
                    <Tab value="one" label="Thông tin chung" to="/test-outline/detail/:id" component={RouterLink}/>
                    <Tab value="two" label="Ma trận đề" to="/test-outline/detail/test-blueprint/:id" component={RouterLink}/>
                    <Tab value="three" label="Ngân hàng câu hỏi" to="/test-outline/detail/question/:id" component={RouterLink}/>
                    <Tab value="four" label="Ngân hàng đề thi" to="/test-outline/detail/test-form/:id" component={RouterLink}/>
                </Tabs>
            </Box>
        </div> 
    )
}

export default TestOutlineTab;