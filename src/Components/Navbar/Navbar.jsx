import "./Navbar.css";
import { NavLink } from "react-router-dom";
import {
  FavoriteBorderOutlinedIcon,
  ShoppingBagOutlinedIcon,
  ShoppingCartOutlinedIcon,
} from "../../Utils/Icons";

function Navbar() {
  return (
    <div style={{ marginBottom: "5rem" }}>
      <nav className="navbar navbar-expand-md navbar-dark bg-primary fixed-top px-4">
        <div className="container-fluid align-items-center">
          <a href="#intro" className="navbar-brand">
            <span className="fw-bold text-secondary">
              <img
                src="Ecospot-logo.png"
                alt="company logo"
                className="navbar-brand company-logo "
              />
            </span>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#main-nav"
            aria-controls="main-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end align-center"
            id="main-nav"
          >
            <nav>
              <ul className="navbar-nav align-items-center nav--content">
                <li className="nav-item me-2">
                  <NavLink to="/" className="nav-link text-white">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item me-2">
                  <NavLink to="/Shoppingcart" className="nav-link text-white">
                    About Us
                  </NavLink>
                </li>
                <li className="nav-item me-2">
                  <NavLink to="/ContactUs" className="nav-link text-white">
                    Contact Us
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/orders" className="nav-link text-white">
                    <ShoppingBagOutlinedIcon className="text-white me-1 " />
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/Whislist">
                    <FavoriteBorderOutlinedIcon className="text-white" />
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/cart">
                    <ShoppingCartOutlinedIcon className="text-white" />
                  </NavLink>
                </li>

                <li className="nav-item d-md-none">
                  <a href="#" className="nav-link text-white">
                    Pricing
                  </a>
                </li>
                <li className="nav-item ms-2 d-none d-md-inline border-none">
                  <NavLink to="/SignIn" className="btn  btn-sm bg-white">
                    Sign In
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
