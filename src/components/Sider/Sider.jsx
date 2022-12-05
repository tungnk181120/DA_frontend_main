import SiderItem from "../SiderItem/SiderItem";
import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';

function Sider(){
    const { collapseSidebar } = useProSidebar();
    return(
        <div style={{ display: 'flex', height: '100%' }}>
            <Sidebar>
                <Menu>
                    <MenuItem routerLink={<Link to="/dashboard" />}>Trang chủ</MenuItem>
                    <MenuItem routerLink={<Link to="/test-outline" />}>Quản lý khung đề thi</MenuItem>
                    <MenuItem routerLink={<Link to="/test-form" />}>Quản lý đề thi</MenuItem>
                </Menu>
            </Sidebar>
            <main>
                <button onClick={() => collapseSidebar()}>Collapse</button>
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