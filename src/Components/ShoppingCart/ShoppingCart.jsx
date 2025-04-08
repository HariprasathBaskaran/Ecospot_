import React from "react";

const ShoppingCart = () => {
  return (
    <div className="container py-4 ">
      <div className="row">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header d-flex justify-content-between align-items-center">
              <p className="h2">ShoppingCart</p>
              <p className="h4">Price</p>
            </div>
            <div className="card-body">
              <div className="border-bottom mb-3 p-3">
                <div className="row">
                  <div className="col-auto">
                    <input type="checkbox" name="checkbox" className="mt-4" />
                  </div>
                  <div className="col-auto">
                    <img
                      src="/Images/HomeDecorAirFreshener/Image-01.png"
                      className="image-fluid"
                      style={{ height: "100px", width: "100px" }}
                    />
                  </div>
                  <div className="col">
                    <h5 className="mb-2">French Rose</h5>
                    <h6 className="muted mb-2">Air Freshner</h6>
                    <h4 className="text-success mb-2">In-Stock</h4>
                    <p className="">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Molestiae impedit quos sunt corporis rem sequi.
                    </p>

                    <div className=" d-flex align-items-center gap-3">
                      <div className="input-group" style={{ width: "150px" }}>
                        <span className="input-group-text ">Quantity</span>
                        <button className="btn btn-outline-secondary">-</button>
                        <input
                          type="text"
                          className="form-control text-center"
                          value={3}
                          readOnly
                        />
                        <button className="btn-outline-secondary">+</button>
                      </div>
                      <button className="btn  text-danger btn-light">
                        delete
                      </button>
                      <button className=" btn btn-light">Share</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-4">
            <div className="card-body ">
              <div className="d-flex align-items-center mb-3">
                <span className="text-success h3 mb-3">
                  this item Eligibility for checkout
                </span>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <span className="h2">Subtotal items 2  </span>
                <span className="h2">$ 450</span>
              </div>
              <button
                className="btn btn-light w-100"
                style={{ backgroundColor: "#d4a7a7" }}
              >
                Proceed to pay
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
