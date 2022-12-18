import SiderItem from "../SiderItem/SiderItem";
import * as React from 'react';
import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import { FaHome, FaOutdent, FaSolarPanel, FaWpforms, FaQuestionCircle,
            FaChild, FaRegCalendarTimes, FaKaggle, FaUserAlt, FaSignOutAlt } from "react-icons/fa";

import './Sider.scss';

function Sider(props){
    const { collapseSidebar } = useProSidebar();
    // const [active, setState] = React.useState(false);

    // const handleChange = (event, newValue) => {
    //   setState(newValue);
    // };
    return(
        <div className="sidebar-border" style={{ display: 'flex', height: '100%' }}>
            <Sidebar>
                <Menu
                // onChange={handleChange}
                menuItemStyles={{
                    button: ({active, level }) => {
                        // only apply styles on first level elements of the tree
                        if (level === 0)
                        return {
                            color: active ? '#1f18cb' : '#090809' ,
                            backgroundColor: active ? '#cfdce6' : undefined,
                            margin:5
                        };
                    },
                    }}>
                    <MenuItem disabled={true} icon={<FaKaggle />} routerLink={<Link to="/" />} rootStyles={{ top:0,}}>
                        Hệ thống thi trực tuyến
                    </MenuItem>
                    <MenuItem active={false} icon={<FaHome />} routerLink={<Link to="/dashboard" />}>Trang chủ</MenuItem>
                    <MenuItem active={false} icon={<FaSolarPanel />} routerLink={<Link to="/test-outline" />}>Quản lý khung đề thi</MenuItem>
                    <MenuItem active={false} icon={<FaWpforms />} routerLink={<Link to="/test-form" />}>Quản lý đề thi</MenuItem>
                    <MenuItem active={false} icon={<FaQuestionCircle />} routerLink={<Link to="/questions" />}>Quản lý câu hỏi</MenuItem>
                    <MenuItem active={false} icon={<FaChild />} routerLink={<Link to="/classes" />}>Quản lý lớp học</MenuItem>
                    <MenuItem active={false} icon={<FaRegCalendarTimes />} routerLink={<Link to="/taker-manager" />}>Quản lý kíp thi</MenuItem>
                    <MenuItem active={false} icon={<FaUserAlt />} routerLink={<Link to="/account" />}> Tài khoản</MenuItem>
                    <MenuItem active={false} icon={<FaSignOutAlt />} routerLink={<Link to="/logout" />}> Đăng xuất </MenuItem>
                </Menu>
            </Sidebar>
            <main>
                <button className="btn-collapse" onClick={() => collapseSidebar()}>
                    <FaOutdent />
                </button>
            </main>
        </div>
    )
}

// function Sider() {
//     return (  
//         <div>
//             <SiderItem path='dashboard' content='Trang chu'/>
//         </div>
//     );
// }

export default Sider;