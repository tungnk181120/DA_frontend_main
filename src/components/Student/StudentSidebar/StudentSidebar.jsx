import * as React from 'react';
import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import { FaHome, FaOutdent, FaSolarPanel, FaWpforms, FaQuestionCircle,
            FaChild, FaRegCalendarTimes, FaKaggle, FaUserAlt, FaSignOutAlt } from "react-icons/fa";

import './Sidebar.scss';

function StudentSidebar(props){
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
                    {/* <MenuItem active={props.main} icon={<FaHome />} routerLink={<Link to="/trang-chu" />}>Trang chủ</MenuItem> */}
                    <MenuItem active={props.lop_hoc} icon={<FaChild />} routerLink={<Link to="/lop-hoc" />}>Lớp học</MenuItem>
                    <MenuItem active={props.bai_thi} icon={<FaWpforms />} routerLink={<Link to="/bai-thi" />}>Bài thi</MenuItem>
                    {/* <MenuItem active={props.questions} icon={<FaQuestionCircle />} routerLink={<Link to="/questions" />}>Quản lý câu hỏi</MenuItem>
                    <MenuItem active={props.class} icon={<FaChild />} routerLink={<Link to="/classes" />}>Quản lý lớp học</MenuItem>
                    <MenuItem active={props.taker_manager} icon={<FaRegCalendarTimes />} routerLink={<Link to="/taker-manager" />}>Quản lý kíp thi</MenuItem> */}
                    <MenuItem active={props.tai_khoan} icon={<FaUserAlt />} routerLink={<Link to="/tai-khoan" />}> Tài khoản</MenuItem>
                    <MenuItem active={props.dang_xuat} icon={<FaSignOutAlt />} routerLink={<Link to="/dang-xuat" />}> Đăng xuất </MenuItem>
                    <div className="fill-student">
                        
                    </div>
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


export default StudentSidebar;