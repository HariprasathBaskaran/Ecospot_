import axios from "axios";
import { useEffect, useState } from "react";
import "./Orders.css";

function Orders() {
  const [order, setOrder] = useState([]);
  useEffect(() => {
    axios
      .get(`https://679502dfaad755a134eafb70.mockapi.io/Project/orders`)
      .then((res) => {
        setOrder(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="container orders-container">
      <div className="alert alert-success orders--heading" role="alert">
        Orders
      </div>
      <div className="card shadow-lg p-3 mb-5 bg-white rounded">
        {order.length === 0 ? (
          <h5>No order Yet</h5>
        ) : (
          order.map((order) => (
            <div className="row g-4 mb-4">
              {order.product.map((product, index) => (
                <>
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
                      <h5 className="card-title orders--title">
                        {product.Name}
                      </h5>
                      <p className="card-text orders--type">
                        <small className="text-muted">{product.Type}</small>
                      </p>
                      <p className="card-text orders--description">
                        100% soy wax sachets perfumed with non-toxic essence
                        Simply hang.
                      </p>
                      <p className="card-text text-secondary orders--price">
                        ₹{product.Price}
                      </p>
                    </div>
                  </div>

                  {/* Delivery Details */}
                  <div className=" col-sm-12 col-md-3  col-lg-3 col-xl-3 d-flex flex-column">
                    <h6 className="fw-bold delivery--heading">
                      Delivery Address:
                    </h6>
                    <p className="delivery--details">{order.selectedAddress}</p>
                    <h6 className="fw-bold delivery--heading">
                      Delivery Detail:
                    </h6>
                    <p className="delivery--details">
                      Delivery On {order.deliveryDate}
                    </p>
                    <button className="btn btn-outline-primary mb-2 w-75">
                      Track Your Order
                    </button>
                    <button className="btn btn-outline-danger w-75">
                      Cancel order
                    </button>
                  </div>
                </>
              ))}
            </div>
          ))

          // order.map((singleOrder) => (
          //   <div className="row g-4">
          //     {/* Product Image */}
          //     <div className="col-sm-12 col-md-5 col-lg-4 col-xl-3">
          //       <img
          //         src={singleOrder.product.imgPath}
          //         alt={singleOrder.product.Name}
          //         className="img-fluid rounded-start"
          //         style={{ maxWidth: "250px", bordeeRadius: "8px" }}
          //       />
          //     </div>

          //     {/* Product Details */}
          //     <div className="col-sm-12 col-md-4 col-lg-5 col-xl-6">
          //       <div className="card-body">
          //         <h5 className="card-title orders--title">
          //           {singleOrder.product.Name}
          //         </h5>
          //         <p className="card-text orders--type">
          //           <small className="text-muted">
          //             {singleOrder.product.Type}
          //           </small>
          //         </p>
          //         <p className="card-text orders--description">
          //           100% soy wax sachets perfumed with non-toxic essence Simply
          //           hang.
          //         </p>
          //         <p className="card-text text-secondary orders--price">
          //           ₹{singleOrder.product.Price}
          //         </p>
          //       </div>
          //     </div>

          //     {/* Delivery Details */}
          //     <div className=" col-sm-12 col-md-3  col-lg-3 col-xl-3 d-flex flex-column">
          //       <h6 className="fw-bold delivery--heading">Delivery Address:</h6>
          //       <p className="delivery--details">
          //         {singleOrder.selectedAddress}
          //       </p>
          //       <h6 className="fw-bold delivery--heading">Delivery Detail:</h6>
          //       <p className="delivery--details">
          //         Delivery On {singleOrder.deliveryDate}
          //       </p>
          //       <button className="btn btn-outline-primary mb-2 w-75">
          //         Track Your Order
          //       </button>
          //       <button className="btn btn-outline-danger w-75">
          //         Cancel order
          //       </button>
          //     </div>
          //     <hr />
          //   </div>
          // ))
        )}
      </div>
    </div>
  );
}

export default Orders;
