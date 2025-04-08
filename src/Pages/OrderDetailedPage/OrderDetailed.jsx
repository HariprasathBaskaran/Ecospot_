import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./OrderDetailed.css";
import { OrderSummary } from "../OrderSummary/OrderSummary";
import { useLocation, useNavigate } from "react-router-dom";
import PriceSummary from "./PriceSummary/PriceSummary";
import axios from "axios";

const OrderDetailed = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { product } = location.state || {};
  const productArray = Array.isArray(product) ? product : [product];
  const [activeStep, setActiveStep] = useState(1);
  const [visitedSteps, setVisitedSteps] = useState(new Set([1]));
  const [addresses, setAddresses] = useState([
    "123 Main St, Springfield, IL",
    "456 Oak St, Chicago, IL",
    "789 Pine St, Peoria, IL",
  ]);
  const [selectedAddress, setSelectedAddress] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [newAddressData, setNewAddressData] = useState({
    name: "",
    doorNumber: "",
    contactNumber: "",
    streetName: "",
    district: "",
    city: "",
  });
  const [selectedPayment, setSelectedPayment] = useState("");
  const [orderConfirmed, setOrderConfirmed] = useState(false); // Track order confirmation

  const handleAddressChange = (event) => {
    setSelectedAddress(event.target.value);
  };

  const handleStepComplete = (step) => {
    if (step === activeStep) {
      setActiveStep(step + 1);
      setVisitedSteps((prev) => new Set([...prev, step + 1]));
    }
  };

  const handleStepClick = (step) => {
    if (!orderConfirmed && visitedSteps.has(step)) {
      setActiveStep(step);
    }
  };

  const handleNewAddressInputChange = (e) => {
    const { name, value } = e.target;
    setNewAddressData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleNewAddressSubmit = () => {
    const { name, doorNumber, contactNumber, streetName, district, city } =
      newAddressData;

    if (name && doorNumber && contactNumber && streetName && district && city) {
      const newAddress = `${doorNumber}, ${streetName}, ${district}, ${city} - Contact: ${contactNumber}`;
      setAddresses([...addresses, newAddress]);
      setShowModal(false);
      setNewAddressData({
        name: "",
        doorNumber: "",
        contactNumber: "",
        streetName: "",
        district: "",
        city: "",
      });
    } else {
      alert("Please fill in all the fields.");
    }
  };

  const calculateDeliveryDate = (daysToAdd) => {
    const today = new Date();
    today.setDate(today.getDate() + daysToAdd);
    return today.toDateString(); // Format: "Wed Jan 24 2025"
  };

  const deliveryDate = calculateDeliveryDate(3);

  // const product = {
  //   image: "https://via.placeholder.com/150", // Replace with actual image URL
  //   title: "Lavender Rust",
  //   description: "Air-freshener made of 100% soy wax.",
  //   price: "345.00",
  //   deliveryDetail: "Delivery On 24-12-2023 (Sunday)",
  // };

  const handlePaymentChange = (event) => {
    setSelectedPayment(event.target.value);
  };

  const handleSubmitPayment = () => {
    // product update in orders page
    const orderData = {
      product: productArray,
      selectedAddress: selectedAddress,
      paymentMethod: selectedPayment,
      deliveryDate: deliveryDate,
    };

    // axios method to update the orders
    axios
      .post(
        "https://679502dfaad755a134eafb70.mockapi.io/Project/orders",
        orderData
      )
      .then((response) => {
        console.log("Order submitted successfully:", response.data);
        setTimeout(() => {
          setOrderConfirmed(true);
          navigate("/bookingsuccess", {
            state: {
              productArray,
              deliveryDate,
              selectedAddress,
            },
          });
        }, 2000);
      })
      .catch((error) => {
        console.error("Error submitting order:", error);
      });
  };

  return (
    <div className="container main-container">
      <div className="row">
        <div className="col-12 col-lg-8">
          <div className="accordion" id="accordionExample">
            {/* Step 1: Delivery Address */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className={`accordion-button accordion-text ${
                    activeStep !== 1 || orderConfirmed ? "collapsed" : ""
                  }`}
                  type="button"
                  onClick={() => handleStepClick(1)}
                  aria-expanded={activeStep === 1}
                  aria-controls="collapseOne"
                  disabled={orderConfirmed} // Disable if order is confirmed
                >
                  Delivery Address
                </button>
              </h2>
              <div
                id="collapseOne"
                className={`accordion-collapse collapse ${
                  activeStep === 1 ? "show" : ""
                }`}
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <h3 className="accordian--body-title">Select an Address</h3>
                  {/* Address Selection */}
                  <form>
                    {addresses.map((address, index) => (
                      <div className="form-check" key={index}>
                        <input
                          className="form-check-input"
                          type="radio"
                          name="address"
                          value={address}
                          checked={selectedAddress === address}
                          onChange={handleAddressChange}
                          id={`address${index}`}
                          disabled={orderConfirmed} // Disable if order is confirmed
                        />
                        <label
                          className="form-check-label mb-3"
                          htmlFor={`address${index}`}
                        >
                          {address}
                        </label>
                      </div>
                    ))}
                    <button
                      type="button"
                      className="btn btn-primary mt-3 text-white btn-alignment"
                      onClick={() => handleStepComplete(1)}
                      disabled={!selectedAddress || orderConfirmed} // Disable if order is confirmed
                    >
                      Use this Address
                    </button>
                    <button
                      type="button"
                      className="btn btn-secondary mt-3 ms-2 btn-alignment"
                      onClick={() => setShowModal(true)}
                      disabled={orderConfirmed} // Disable if order is confirmed
                    >
                      Add New Address
                    </button>
                  </form>

                  {/* Modal for New Address */}
                  {showModal && (
                    <div
                      className="modal fade show d-block"
                      tabIndex="-1"
                      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
                    >
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title">Add New Address</h5>
                            <button
                              type="button"
                              className="btn-close"
                              onClick={() => setShowModal(false)}
                            ></button>
                          </div>
                          <div className="modal-body">
                            <div className="mb-3">
                              <label htmlFor="name" className="form-label">
                                Name
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                                value={newAddressData.name}
                                onChange={handleNewAddressInputChange}
                                placeholder="Enter your name"
                                disabled={orderConfirmed} // Disable if order is confirmed
                              />
                            </div>
                            <div className="mb-3">
                              <label
                                htmlFor="doorNumber"
                                className="form-label"
                              >
                                Door Number
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="doorNumber"
                                name="doorNumber"
                                value={newAddressData.doorNumber}
                                onChange={handleNewAddressInputChange}
                                placeholder="Enter door number"
                                disabled={orderConfirmed} // Disable if order is confirmed
                              />
                            </div>
                            <div className="mb-3">
                              <label
                                htmlFor="contactNumber"
                                className="form-label"
                              >
                                Contact Number
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="contactNumber"
                                name="contactNumber"
                                value={newAddressData.contactNumber}
                                onChange={handleNewAddressInputChange}
                                placeholder="Enter contact number"
                                disabled={orderConfirmed} // Disable if order is confirmed
                              />
                            </div>
                            <div className="mb-3">
                              <label
                                htmlFor="streetName"
                                className="form-label"
                              >
                                Street Name
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="streetName"
                                name="streetName"
                                value={newAddressData.streetName}
                                onChange={handleNewAddressInputChange}
                                placeholder="Enter street name"
                                disabled={orderConfirmed} // Disable if order is confirmed
                              />
                            </div>
                            <div className="mb-3">
                              <label htmlFor="district" className="form-label">
                                District
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="district"
                                name="district"
                                value={newAddressData.district}
                                onChange={handleNewAddressInputChange}
                                placeholder="Enter district"
                                disabled={orderConfirmed} // Disable if order is confirmed
                              />
                            </div>
                            <div className="mb-3">
                              <label htmlFor="city" className="form-label">
                                City
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="city"
                                name="city"
                                value={newAddressData.city}
                                onChange={handleNewAddressInputChange}
                                placeholder="Enter city"
                                disabled={orderConfirmed} // Disable if order is confirmed
                              />
                            </div>
                          </div>
                          <div className="modal-footer">
                            <button
                              className="btn btn-secondary"
                              onClick={() => setShowModal(false)}
                            >
                              Cancel
                            </button>
                            <button
                              className="btn btn-primary"
                              onClick={handleNewAddressSubmit}
                              disabled={orderConfirmed} // Disable if order is confirmed
                            >
                              Submit
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Step 2: Order Summary */}

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className={`accordion-button accordion-text ${
                    activeStep !== 2 ? "collapsed" : ""
                  }`}
                  type="button"
                  onClick={() => handleStepClick(2)}
                  aria-expanded={activeStep === 2}
                  aria-controls="collapseTwo"
                >
                  Order Summary
                </button>
              </h2>
              <div
                id="collapseTwo"
                className={`accordion-collapse collapse ${
                  activeStep === 2 ? "show" : ""
                }`}
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <OrderSummary
                    product={productArray}
                    onConfirm={() => handleStepComplete(2)}
                    deliveryDate={deliveryDate}
                  />
                </div>
              </div>
            </div>

            {/* Step 3: Payment Options */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className={`accordion-button accordion-text ${
                    activeStep !== 3 || orderConfirmed ? "collapsed" : ""
                  }`}
                  type="button"
                  onClick={() => handleStepClick(3)}
                  aria-expanded={activeStep === 3}
                  aria-controls="collapseThree"
                  disabled={orderConfirmed} // Disable if order is confirmed
                >
                  Payment Options
                </button>
              </h2>
              <div
                id="collapseThree"
                className={`accordion-collapse collapse ${
                  activeStep === 3 ? "show" : ""
                }`}
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <h3 className="accordian--body-title">
                    Select Payment Method
                  </h3>
                  <div className="form-check payment">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="gpay"
                      name="paymentMethod"
                      value="GPay"
                      checked={selectedPayment === "GPay"}
                      onChange={handlePaymentChange}
                      disabled={orderConfirmed} // Disable if order is confirmed
                    />
                    <label className="form-check-label" htmlFor="gpay">
                      GPay
                    </label>
                  </div>
                  <div className="form-check payment">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="phonepe"
                      name="paymentMethod"
                      value="PhonePe"
                      checked={selectedPayment === "PhonePe"}
                      onChange={handlePaymentChange}
                      disabled={orderConfirmed} // Disable if order is confirmed
                    />
                    <label className="form-check-label" htmlFor="phonepe">
                      PhonePe
                    </label>
                  </div>
                  <div className="form-check payment">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="qrCode"
                      name="paymentMethod"
                      value="QR Code"
                      checked={selectedPayment === "QR Code"}
                      onChange={handlePaymentChange}
                      disabled={orderConfirmed} // Disable if order is confirmed
                    />
                    <label className="form-check-label" htmlFor="qrCode">
                      QR Code
                    </label>
                  </div>
                  <div className="form-check payment">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="creditDebitCard"
                      name="paymentMethod"
                      value="Debit/Credit Card"
                      checked={selectedPayment === "Debit/Credit Card"}
                      onChange={handlePaymentChange}
                      disabled={orderConfirmed} // Disable if order is confirmed
                    />
                    <label
                      className="form-check-label"
                      htmlFor="creditDebitCard"
                    >
                      Debit/Credit Card
                    </label>
                  </div>
                  <div className="form-check payment">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="cod"
                      name="paymentMethod"
                      value="COD"
                      checked={selectedPayment === "COD"}
                      onChange={handlePaymentChange}
                      disabled={orderConfirmed} // Disable if order is confirmed
                    />
                    <label className="form-check-label" htmlFor="cod">
                      Cash on Delivery (COD)
                    </label>
                  </div>
                  <button
                    type="button"
                    className="btn btn-success mt-3 bg-primary btn-alignment"
                    onClick={handleSubmitPayment}
                    disabled={!selectedPayment || orderConfirmed} // Disable if order is confirmed
                  >
                    Submit Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-3">
          <PriceSummary product={productArray} />
        </div>
      </div>
    </div>
  );
};

export default OrderDetailed;
