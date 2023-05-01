import { Link, NavLink, useNavigate } from 'react-router-dom';
import { RUTAS } from '../../config';


export const Navbar = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
        // TODO: Desconectar el usuario (evita que pueda volver a la pantalla de heroes)
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
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end ">
                <ul className="navbar-nav ml-auto">

                    <span className='nav-item nav-link text-primary'>
                        Pedro Araya
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
