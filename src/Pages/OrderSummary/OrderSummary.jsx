import Button from "../../Components/Buttons/Button";
import "./OrderSummary.css";

export const OrderSummary = ({ product, onConfirm, deliveryDate }) => {
  return (
    <div className="order-summary">
      {product.map((product) => (
        <>
          <div className="d-flex justify-content-between align-items-center border p-3 rounded mb-3">
            {/* Product Image */}
            <img
              src={product.imgPath}
              alt={product.Name}
              className="img-fluid"
              style={{ maxWidth: "150px", borderRadius: "8px" }}
            />

            {/* Product Details */}
            <div className="flex-grow-1 mx-3  ">
              <h5 className="fw-bold">{product.Name}</h5>
              <p className="text-muted mb-1">{product.Type}</p>
              <p className="mb-1 fw-bold text-secondary">${product.Price}</p>
            </div>
            {/* Product Delivery Details */}
            <div className="text-end">
              <h6>
                <strong>Delivery Detail:</strong>
              </h6>
              <p>{deliveryDate}</p>
            </div>
          </div>
        </>
      ))}

      {/* confirmation page */}
      <Button
        addOnClasses="btn btn-primary mt-3 text-white btn-alignment"
        eventHandler={onConfirm}
        label={"Proceed to checkout"}
      ></Button>
    </div>
  );
};
