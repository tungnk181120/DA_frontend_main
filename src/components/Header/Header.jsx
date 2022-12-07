import { Sidebar, Menu, MenuItem, useProSidebar, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import { FaUserAlt, FaSignOutAlt } from "react-icons/fa";

import './Header.scss';

function Header(name){
    return(
        <div className="header" style={{ display: 'flex', height: '100%' }}>
            <Sidebar>
                <Menu menuItemStyles={{
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
                    <SubMenu label="Nguyen Kim Tung">
                        <MenuItem icon={<FaUserAlt />} routerLink={<Link to="/account" />}> Tài khoản</MenuItem>
                        <MenuItem icon={<FaSignOutAlt />} routerLink={<Link to="/logout" />}> Đăng xuất </MenuItem>
                    </SubMenu>
                </Menu>
            </Sidebar>
        </div>
    )
}


export default Header;