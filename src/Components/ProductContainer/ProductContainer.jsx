import { useEffect, useState } from "react";
import "./ProductContainer.css";

import {
  FavoriteBorderOutlinedIcon,
  StarOutlinedIcon,
} from "../../Utils/Icons";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader/Loader";
import axios from "axios";

function ProductContainer({ coverImage, url }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    fetch(`${url}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [url]);

  const handleProductClick = (id, imgPath) => {
    const pathName = imgPath.slice(17, -13);

    navigate(`/${pathName}/${id}`, {
      state: { url: url, data: data[id] },
    });
  };

  const clickCartHandler = (id) => {
    const productData = data.find((item) => item.id === id);

    axios
      .post(
        "https://679502dfaad755a134eafb70.mockapi.io/Project/cart",
        productData
      )
      .then((response) => {
        console.log("Order submitted successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error in adding cart:", error);
      });
  };

  return (
    <div className="container">
      {loading ? (
        <Loader />
      ) : (
        <>
          <div style={{ padding: "0 9.5rem" }}>
            <img
              src={`/CoverImage/${coverImage}`}
              alt="coverimage"
              style={{ width: "100%", marginTop: "8rem" }}
            />
          </div>

          <div className="product-container">
            <div className="row row-cols-3 justify-content-between gx-3">
              {data.map((productData) => (
                <div
                  className=" col col-md-4 card mt-5"
                  style={{ width: "30rem", padding: "2rem 2.4rem" }}
                >
                  <div
                    // className="mb-2"
                    onClick={() => {
                      handleProductClick(productData.id, productData.imgPath);
               
                    }}
                  >
                    {/* <p className="card-text"> */}
                    <FavoriteBorderOutlinedIcon className="product--icon wishlist" />
                    {/* </p> */}
                    <img
                      src={productData.imgPath}
                      className="card-img-top"
                      alt="test"
                    />

                    <div className="card-body">
                      <div className="d-flex flex-row justify-content-between">
                        <div>
                          <p className="card-text product--type text-lighttext">
                            {productData.Type}
                          </p>
                        </div>
                        <div className="d-flex flex-row align-items-center">
                          <div>
                            <p className="product--rating card-text">
                              {productData.Rating}
                            </p>
                          </div>
                          <div>
                            <StarOutlinedIcon className="product--icon" />
                          </div>
                        </div>
                      </div>
                      <h5 className="card-title product--name text-textcolor">
                        {productData.Name}
                      </h5>
                      <h5 className="card-title product--pricing text-secondary">
                        ${productData.Price}
                      </h5>
                    </div>
                  </div>
                  {productData.Stock ? (
                    <button
                      className="btn btn-primary custom-button text-white"
                      onClick={() => clickCartHandler(productData.id)}
                    >
                      add to cart
                    </button>
                  ) : (
                    <button className="btn btn-primary disabled custom-button text-white">
                      out of stock
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ProductContainer;
