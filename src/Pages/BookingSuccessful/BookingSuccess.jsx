import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useLocation } from "react-router-dom";
import "./BookingSuccess.css";

const BookingSuccess = () => {
  const location = useLocation();
  const { productArray, deliveryDate, selectedAddress } = location.state || {};

  return (
    <div className="container bookingsuccess-container">
      <div className="alert alert-success bookingsuccess--heading" role="alert">
        ✅ Booking Done Successfully
      </div>
      <div className="card shadow-lg p-3 mb-5 bg-white rounded ">
        {productArray.map((product) => (
          <>
            <div className="row g-4 mb-5 ">
              {/* Product Image */}
              <div className="col-sm-12 col-md-5 col-lg-4 col-xl-3">
                <img
                  src={product.imgPath}
                  alt={product.Name}
                  className="img-fluid rounded-start"
                  style={{ maxWidth: "250px", bordeeRadius: "8px" }}
                />
              </div>

              {/* Product Details */}
              <div className="col-sm-12 col-md-4 col-lg-5 col-xl-6">
                <div className="card-body">
                  <h5 className="card-title product--title">{product.Name}</h5>
                  <p className="card-text product--type">
                    <small className="text-muted">{product.Type}</small>
                  </p>
                  <p className="card-text product--description">
                    100% soy wax sachets perfumed with non-toxic essence Simply
                    hang.
                  </p>
                  <p className="card-text text-secondary product--price">
                    ₹{product.Price}
                  </p>
                </div>
              </div>

              {/* Delivery Details */}
              <div className=" col-sm-12 col-md-3  col-lg-3 col-xl-3 d-flex flex-column">
                <h6 className="fw-bold delivery--heading">Delivery Address:</h6>
                <p className="delivery--details">{selectedAddress}</p>
                <h6 className="fw-bold delivery--heading">Delivery Detail:</h6>
                <p className="delivery--details">Delivery On {deliveryDate}</p>
                {/* <button className="btn btn-warning mb-2 w-75">
              Add delivery instructions
            </button>
            <button className="btn btn-outline-danger w-75">
              Cancel order
            </button> */}
              </div>
            </div>
            <div className=" horizontal-line"></div>
          </>
        ))}
      </div>
    </div>
  );
};

export default BookingSuccess;
