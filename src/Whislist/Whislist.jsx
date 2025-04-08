import React from "react";

const Whislist = () => {
  return (
    <div className="container py-4 ">
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header d-flex justify-content-between align-items-center">
              <p className="h2">ShoppingCart</p>
              <p className="h4 me-5">Price</p>
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
                      <button className="btn fw-bold text-danger btn-light">
                        Remove
                      </button>
                      <button className="fw-bold btn btn-light">
                        Add to card
                      </button>
                      <button className=" fw-bold btn btn-light">Share</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whislist;
