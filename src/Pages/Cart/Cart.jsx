import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Cart.css";
import { DeleteForeverOutlinedIcon } from "../../Utils/Icons";

const CartPage = () => {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  const navigate = useNavigate(); // For navigation

  // Fetch products on component mount
  useEffect(() => {
    axios
      .get(`https://679502dfaad755a134eafb70.mockapi.io/Project/cart`)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.error("Error in fetching cart data", err);
        setError("Failed to load cart. Please try again.");
      });
  }, []);

  // Toggle product selection
  const toggleSelection = (product) => {
    if (!product.Stock) return;

    setSelectedProducts((prev) => {
      if (prev.some((p) => p.id === product.id)) {
        return prev.filter((p) => p.id !== product.id);
      }
      return [...prev, product];
    });
  };

  // Calculate total price of selected products
  const calculateTotal = () =>
    selectedProducts.reduce((total, product) => total + product.Price, 0);

  // Check if any selected product is out of stock
  const hasOutOfStockSelected = selectedProducts.some((selected) => {
    const product = products.find((p) => p.id === selected.id);
    return product && !product.Stock;
  });

  // Delete a product from the cart
  const deleteHandler = (id) => {
    axios
      .delete(`https://679502dfaad755a134eafb70.mockapi.io/Project/cart/${id}`)
      .then(() => {
        setProducts((prev) => prev.filter((item) => item.id !== id));
      })
      .catch((error) => {
        console.error("Error in deleting product:", error);
      });
  };

  // Handle checkout
  const handleCheckout = () => {
    navigate("/orderDetail", { state: { product: selectedProducts } });
  };

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  return (
    <div className="container my-4">
      <div className="row cart-container">
        {/* Cart Items */}
        <div className="col-lg-8">
          <div className="card shadow">
            <div className="card-header bg-white">
              <h2 className="h5 mb-0 left-alignment cart--heading">
                Shopping Cart
              </h2>
            </div>
            <div className="card-body">
              {products.length === 0 ? (
                <p className="text-muted">Your cart is empty.</p>
              ) : (
                products.map((product) => (
                  <div
                    key={product.id}
                    className="d-flex align-items-start justify-content-between border-bottom py-3"
                  >
                    <div className="d-flex align-items-start">
                      <input
                        type="checkbox"
                        className="form-check-input me-3"
                        checked={selectedProducts.some(
                          (p) => p.id === product.id
                        )}
                        onChange={() => toggleSelection(product)}
                        disabled={!product.Stock}
                      />
                      <img
                        src={product.imgPath}
                        alt={product.Name}
                        className="img-thumbnail me-3"
                        style={{ maxWidth: "15rem" }}
                      />
                      <div className="left-alignment">
                        <h5 className="mb-1 cart--title">{product.Name}</h5>
                        <p className="mb-1 text-muted small cart--type">
                          {product.Type}
                        </p>
                        <p className="mb-1 text-muted small cart--description">
                          100% handmade with lavender and vanilla-flavored
                          air-freshener
                        </p>
                        <p
                          className={`mb-0 fw-bold ${
                            product.Stock ? "text-success" : "text-danger"
                          }`}
                        >
                          {product.Stock ? "In Stock" : "Out of stock"}
                        </p>
                      </div>
                    </div>
                    <p className="h6 text-end cart--price text-secondary">
                      ₹{product.Price}.00
                    </p>
                    <button
                      className="cart--delete-btn"
                      onClick={() => deleteHandler(product.id)}
                    >
                      <DeleteForeverOutlinedIcon className="icon--size" />
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Summary Section */}
        <div className="col-lg-4">
          <div className="card shadow">
            <div className="card-header bg-white">
              <h2 className="h5 mb-0 left-alignment cart-summary">Summary</h2>
            </div>
            <div className="card-body cart--summary-details">
              <div className="d-flex justify-content-between mb-3">
                <span className="summary--subTitle">Items Selected</span>
                <span className="fw-bold summary--subTitle-values">
                  {selectedProducts.length}
                </span>
              </div>
              <div className="d-flex justify-content-between mb-4">
                <span className="summary--subTitle">SubTotal</span>
                <span className="fw-bold h5 summary--subTitle-values">
                  ₹{calculateTotal()}.00
                </span>
              </div>
              <button
                className="btn btn-primary text-white py-3 w-100"
                disabled={
                  selectedProducts.length === 0 || hasOutOfStockSelected
                }
                onClick={handleCheckout}
              >
                Proceed to Pay
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
