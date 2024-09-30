import { Link, NavLink } from 'react-router-dom';
import './style.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">My App</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <NavLink
            to="/exercise-1"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Exercise 1
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/exercise-2"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Exercise 2
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/exercise-3"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Exercise 3
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
