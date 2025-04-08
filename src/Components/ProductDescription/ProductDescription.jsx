import { useParams, useLocation, useNavigate } from "react-router-dom";
import { CheckCircleIcon, StarOutlinedIcon } from "../../Utils/Icons";
import Button from "../Buttons/Button";
import "./ProductDescription.css";
import { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import axios from "axios";

function ProductDescription() {
  const location = useLocation();
  const navigate = useNavigate();
  const { url } = location.state || {};
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);
    fetch(`${url}`)
      // fetch(`/data/homeDecorAirFreshener.json`)
      .then((response) => response.json())
      .then((data) => {
        const productData = data.find((item) => item.id === Number(id));
        productData
          ? setProduct(productData)
          : console.error("product not found!");
      })
      .catch((error) => console.error("Error fetching products:", error))
      .finally(() => setLoading(false));
  }, [id, url]);

  const {
    imgPath,
    positiveRating,
    recentOrder,
    Name,
    Rating,
    Stock,
    lastMonthOrder,
    Price,
    mrp,
    buyPrice,
  } = product;

  const clickHandler = () => {
    navigate(`/orderDetail`, { state: { product: product } });
  };

  const cartHandler = () => {
    axios
      .post("https://679502dfaad755a134eafb70.mockapi.io/Project/cart", product)
      .then((response) => {
        console.log("Order submitted successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error in adding cart:", error);
      });
  };

  return (
    <div className="container main-container">
      {loading ? (
        <Loader />
      ) : (
        <>
          <div
            className="container"
            style={{
              padding: "0 5rem",
              border: "0.1rem solid #000",
              // borderRadius: "0.8rem",
            }}
          >
            <div style={{ borderRadius: "0.8rem" }}>
              <div className="row" style={{ padding: "5rem" }}>
                <div className="col col-sm-12 col-md-5">
                  {/* <div className="d-flex flex-column"> */}
                  {/* <div className="col"> */}
                  <div>
                    <img
                      src={imgPath}
                      alt="testiamge"
                      style={{ width: "30rem", height: "28rem" }}
                    />
                  </div>
                  <div style={{ margin: "2rem 0" }}>
                    <img
                      src={imgPath}
                      alt="otherimage"
                      className="other--image"
                      // style={{ width: "8rem", height: "8rem", marginRight: "3rem" }}
                    />
                    <img
                      src={imgPath}
                      alt="otherimage"
                      className="other--image"
                      // style={{ width: "8rem", height: "8rem", marginRight: "3rem" }}
                    />
                    <img
                      src={imgPath}
                      alt="otherimage"
                      className="other--image last"
                      // style={{ width: "8rem", height: "8rem" }}
                    />
                  </div>
                  <div className="justify-content-center positive--review">
                    <span>
                      <CheckCircleIcon />
                      <span> {positiveRating}% positive rating from users</span>
                    </span>
                    <br />
                    <span>
                      <CheckCircleIcon />
                      <span>{recentOrder}+k recent order with this brand</span>
                    </span>
                  </div>
                  {/* </div> */}
                </div>
                <div
                  className="col col-sm-12 col-md-6"
                  style={{ textAlign: "left" }}
                >
                  <div className="d-flex flex-row justify-content-between align-items-center">
                    <div>
                      <p className="product--title text-lighttext">{Name}</p>
                    </div>
                    <div className="d-flex flex-row rating">
                      <div>
                        <p className="product--rating">{Rating}</p>
                      </div>
                      <div>
                        <StarOutlinedIcon className="product--icon" />
                      </div>
                    </div>
                  </div>

                  <h5 className="stock">
                    {Stock ? "In Stock" : "Out of Stock"}
                  </h5>
                  <p className="last--purchase">
                    {" "}
                    {lastMonthOrder}+ bought in last month
                  </p>
                  <h3 className="price text-secondary">
                    ${Price} <span>({((Price - mrp) / buyPrice) * 100}%)</span>
                  </h3>
                  <p className="mrp--price">
                    M.R.P : <span>${mrp}</span>
                  </p>
                  <p className="about--item-title">About the item</p>
                  <ul className="about--item">
                    <li>
                      100% handmade with lavender and vanilla favored
                      air-freshener
                    </li>
                    <li>
                      100% soy wax sachets perfumed with non-toxic essence
                      Simply hang one of our lavender sachets with flower petals
                      to your bathroom, room and let this work its magic.
                    </li>
                    <li>
                      100% handmade with lavender and vanilla favored
                      air-freshener
                    </li>
                    <li>
                      These zero-waste wax material can be melted into scented
                      candles once the aroma subsides.
                    </li>
                    <li>
                      Each sachet lasts 45-90 days depending on the size and
                      ventilation of the area used.
                    </li>
                  </ul>
                  {Stock ? (
                    <>
                      {" "}
                      <Button
                        label={"Add to Cart"}
                        addOnClasses={"btn-outline-primary btnStyle"}
                        eventHandler={() => cartHandler()}
                      />
                      <Button
                        label={"Buy Now"}
                        addOnClasses={"btn-primary text-white btnStyle"}
                        eventHandler={() => clickHandler()}
                      />
                    </>
                  ) : (
                    <Button
                      label={"OUT OF STOCK"}
                      addOnClasses={"btn-primary text-white btnStyle disabled"}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ProductDescription;
