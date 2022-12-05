import { NavLink } from 'react-router-dom';

function SiderItem({path, content}) {
    return (  
        <NavLink to={path}>
            <span>{content}</span>
        </NavLink>
    );
}

export default SiderItem;