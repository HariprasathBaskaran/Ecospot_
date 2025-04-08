import { Link } from "react-router-dom";
import "./Dropdown.css";

function Dropdown({ MainMenu, SubMenu, subLink }) {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-light text-dark">
        <div class="container-fluid">
          <div className="container">
            {/* <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDarkDropdown"
              aria-controls="navbarNavDarkDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button> */}

            <ul class="navbar-nav text-sizing">
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle "
                  href="#"
                  id="navbarDarkDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {MainMenu}
                </a>
                <ul
                  class="dropdown-menu dropdown-menu-light"
                  aria-labelledby="navbarDarkDropdownMenuLink"
                >
                  {/* {SubMenu.map((separateMenu) => (
                    <li>
                      <Link class="dropdown-item" to="*">
                        {separateMenu}
                      </Link>
                    </li>
                  ))} */}
                  {SubMenu?.map((separateMenu, index) => (
                    <li key={index}>
                      <Link class="dropdown-item" to={subLink?.[index]}>
                        {separateMenu}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Dropdown;
