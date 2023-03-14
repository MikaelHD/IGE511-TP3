import { Outlet, Link } from "react-router-dom";
import './HeaderLayout.css'

const Layout = () => {
    return (
        <>
            <nav className="main-menu">
                <ul>
                    <li>
                        <Link to="interface-a" >Interface A</Link>
                    </li>
                    <li>
                        <Link to="/interface-b" >Interface B</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
};

export default Layout;