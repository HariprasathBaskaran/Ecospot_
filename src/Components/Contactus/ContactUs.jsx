import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  AddLocationAltOutlinedIcon,
  PhoneAndroidOutlinedIcon,
  EmailOutlinedIcon,
} from "../../Utils/Icons";
import "./contactus.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("contactForm", JSON.stringify(formData));
    alert("Message sent successfully!");
  };

  return (
    <>
      <div className=" wrapper container-fluid position-relative ">
        {/* Img div */}
        <div>
          <div className=" container-fluid-inner imagefield bg-image-full d-flex col-sm-12  justify-content-center align-items-center">
            <img
              src="/CoverImage/contactus.png"
              style={{ backgroundSize: "cover", backgroundRepeat: "no-repeat" }}
            />
            <div
              className="   text-light position-absolute  "
              style={{ margin: "" }}
            >
              <h2 style={{ marginLeft: "0px" }}>We proved it by saying that</h2>
              <h1 className="fw-bold">We planted 50,000+ trees last year.</h1>
            </div>
          </div>

          <div
            className="form-alignment"
            style={{ Width: "", minHeightHeight: "80vh" }}
          >
            <div
              className="row d-flex  align-items-strech justify-content-center position-relative "
              style={{ width: "50%", marginTop: "-80px", left: "350px" }}
            >
              {/* Contact Form Section */}
              <div className="col-md-8  m-0 p-0 ">
                <div
                  className="card h-100 shadow-lg p-5"
                  style={{
                    backgroundColor: "white",
                    borderRadius: "0px",
                    opacity: 0.95,
                  }}
                >
                  <h2 className="text-center mb-3">Send us a Message</h2>
                  <form className="w-100" onSubmit={handleSubmit}>
                    <div className="form-group mb-4">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        className="form-control p-2"
                        id="name"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div className="form-group mb-4">
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="email"
                        className="form-control p-2"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        onChange={handleChange}
                        value={formData.email}
                      />
                    </div>
                    <div className="form-group mb-4 ">
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="tel"
                        className="form-control p-2"
                        id="phone"
                        placeholder="Enter your phone number"
                        name="phone"
                        onChange={handleChange}
                        value={formData.phone}
                      />
                    </div>
                    <div className="form-group mb-4 ">
                      <label htmlFor="message">Message</label>
                      <textarea
                        className="form-control p-2"
                        id="message"
                        rows="4"
                        placeholder="Enter your message"
                        onChange={handleChange}
                        value={formData.message}
                      ></textarea>
                    </div>
                    <div className="text-center ">
                      <button
                        type="submit"
                        className="btn btn-success "
                        style={{ backgroundColor: "#6c9f3d" }}
                      >
                        send
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              {/* Contact Information Section */}
              <div className="col-md-4 m-0 p-0  d-flex align-items-strech">
                <div
                  className="card h-100 shadow-lg p-4 text-white"
                  style={{ backgroundColor: "#6c9f3d", borderRadius: "0px" }}
                >
                  <h2 className="mb-5">Contact Information</h2>
                  <p>
                    <AddLocationAltOutlinedIcon className="text-white" /> 39,
                    Find Street, Thoraipakkam, Chennai-97
                  </p>
                  <p>
                    <PhoneAndroidOutlinedIcon className="text-white" />
                    9488945548
                  </p>
                  <p>
                    <EmailOutlinedIcon className="text-white" />
                    hello@ecospot.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Newsletter Subscription Section    */}

        <div
          className="row justify-content-center align-items-center "
          style={{ marginTop: "10%", marginBottom: "10%" }}
        >
          <div className="col-6 col-sm-12 col-md-8 col-lg-6">
            <div className="card shadow-lg p-4 bg-white">
              <h3 className="text-center mb-3">
                Subscribe To Our Newsletter for New Product Insights
              </h3>
              <p className="text-center">
                Be first to discover trends, environment safety, and
                eco-friendly products. Get updates directly to your inbox.
              </p>
              <form>
                <div className="d-flex  gap-2">
                  <input
                    type="email"
                    className="form-control mb-3"
                    placeholder="Enter your email address"
                  />
                  <button
                    type="submit"
                    className="btn btn-success"
                    style={{ backgroundColor: "#6c9f3d" }}
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
