import "./Footer.css";

import {
  EmailOutlinedIcon,
  PhoneOutlinedIcon,
  RoomOutlinedIcon,
} from "../../Utils/Icons";

function Footer() {
  return (
    <>
      <footer className="container-fluid bg-primary text-white footer-container  ">
        <div className="container">
          <div className="row">
            <div className="col ">
              <img
                src="/Ecospot-logo.png"
                alt="company logo"
                className="navbar-brand footer--logo"
              />
            </div>
            <div className="col test ">
              <ul>
                <li>About</li>
                <li>About Us</li>
                <li>Products</li>
                <li>Reviews</li>
                <li>Subscribe</li>
              </ul>
            </div>
            <div className="col test">
              <ul>
                <li>Opportunities</li>
                <li>New Products</li>
                <li>New Branches</li>
                <li>Franchise</li>
                <li>careers</li>
              </ul>
            </div>
            <div className="col test contact--alignment">
              <ul>
                <li>Contact details</li>
                <li>
                  <EmailOutlinedIcon />
                  <span className="contact-info">info@ecospot.com</span>
                </li>
                <li>
                  <PhoneOutlinedIcon />
                  <span className="contact-info">9488945548</span>
                </li>
                <li>
                  <RoomOutlinedIcon />
                  <span className="contact-info">
                    <span>39,Find street, </span>

                    <span>Chennai-97</span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <p className="mb-3 copyright h-2">
            &copy; Copyright 2025. All Rights Reserved
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
