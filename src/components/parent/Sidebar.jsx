import { NavLink } from 'react-router-dom';

const SideBar = () => {

  
  return (
    <div
        className="text-white d-flex flex-column p-3"
        style={{
          width: '250px',
          background: 'linear-gradient(135deg,rgb(12, 79, 46),rgb(54, 66, 159))',
        }}
      >      
      <h4 className="text-center mb-4">
        <i class="bi bi-house-slash"></i>Parent Panel
      </h4>
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <NavLink
            to="/parent-dashboard"
            end
            className={({ isActive }) =>
              isActive ? 'nav-link bg-success text-white fw-bold' : 'nav-link text-white'
            }
          >
            <i className="bi bi-grid me-2"></i> Dashboard
          </NavLink>
        </li>


        <li>
          <NavLink
            to="/parent-dashboard/classes"
            className={({ isActive }) =>
              isActive ? 'nav-link bg-success text-white fw-bold' : 'nav-link text-white'
            }
          >
            <i className="bi bi-journal-bookmark me-2"></i> Classes
          </NavLink>
        </li>

       
      </ul>

      <hr />
      <div className="text-center small">
        <span className="text-light">© 2025 Masomo</span>
      </div>
    </div>
  );
};

export default SideBar;