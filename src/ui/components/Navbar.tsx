import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { RUTAS } from '../../config';
import { AuthContext } from '../../auth';


export const Navbar = () => {

    const { user, logout } = useContext(AuthContext);


    const navigate = useNavigate();

    const handleLogout = () => {
        // Todo este proceso en sincrono
        logout();
        navigate('/login', { replace: true });
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p2-2">

            <Link
                className="navbar-brand"
                to={RUTAS.HOME}
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink
                        className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        to={RUTAS.MARVEL}
                    >
                        Marvel
                    </NavLink>

                    <NavLink
                        className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        to={RUTAS.DC}
                    >
                        DC
                    </NavLink>

                    <NavLink
                        className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        to={RUTAS.SEARCH}
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end ">
                <ul className="navbar-nav ml-auto">

                    <span className='nav-item nav-link text-primary'>
                       {user?.name}
                    </span>

                    <button
                        className="nav-item nav-link btn"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>

                </ul>
            </div>
        </nav>
    )
}

