import "./PriceSummary.css";

function PriceSummary({ product }) {
  // const testing = Array.isArray(product) ? product : [product];

  // Calculate the total amounts
  const totalProductAmount = product.reduce(
    (sum, item) => sum + (item.Price || 0),
    0
  );
  const totalDeliveryCharge = product.reduce(
    (sum, item) => sum + (item.deliveryCharge || 0),
    0
  );
  const totalAmount = totalProductAmount + totalDeliveryCharge;

  return (
    <div>
      <div className="container border border-1 rounded">
        <h3 className="price--heading">Price Summary</h3>
        <hr />

        <div className="price--detail">
          <p>
            <span>Product Amount:</span>${totalProductAmount}
          </p>
          <p>
            <span>Delivery Charge:</span>${totalDeliveryCharge}
          </p>
          <p>
            <span>Total Amount:</span>${totalAmount}
          </p>
        </div>
      </div>
    </div>
  );
}

export default PriceSummary;
