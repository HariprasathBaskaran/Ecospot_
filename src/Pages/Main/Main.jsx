import Button from "../../Components/Buttons/Button";
import MaterialCard from "../../Components/MaterialCard/MaterialCard";
import SpecContainer from "../../Components/SpecContainer/SpecContainer";
import Subscribe from "../../Components/SubscribeModal/Subscribe";
import Testimonial from "../../Components/Testimonial/Testimonial";
import {
  LanOutlinedIcon,
  LocalShippingOutlinedIcon,
  SellOutlinedIcon,
} from "../../Utils/Icons";

import "./Main.css";

function Main() {
  return (
    <div className="main">
      {/*###### Top container ######*/}
      <div className="container-fluid p-0">
        <img
          src="/MainPage/mainimage.png"
          alt="main image"
          width="100%"
          height="50%"
        />
        <div className="carusol-content text-primary">
          <p>
            There is no <span>planet B,</span>
          </p>
          <p>
            let save & hand over to the <span>next generation</span>
          </p>
          <Button
            label={"Shop now"}
            addOnClasses={"btn-lg btn-primary text-white px-4"}
          />
        </div>
      </div>

      {/*###### our Story ######*/}
      <div
        className="container-fluid px-0 padding-top padding-bottom bg-altlight"
        id="aboutus"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col mt-5 story--image">
              <img
                src="/MainPage/Storyimage.png"
                alt="storyimage"
                style={{ width: "60%" }}
              />
            </div>

            <div className="col mt-5 story--leftalign">
              <h2 className="fw-bolder fs-1">Our Story</h2>
              <p>
                The app is the one-stop solution to buy the best Eco-friendly
                product. We made the research to find the best combination of
                product as user-friendly for customer and planet{" "}
                <a href="#" className="text-decoration-none">
                  Read More..
                </a>
              </p>
              <h3 className="mt-4 fs-2 text-primary">Our Mission</h3>
              <p>
                The make an environment clean and other life more better with
                our product.
              </p>
              <h3 className="mt-4 fs-2 text-primary">Our Vision</h3>
              <p>
                To create our next-Generation as plastic free environment and
                make greenish our earth.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*###### Browse by material ######*/}

      <div className="container padding-top padding-bottom">
        <h3 className="heading-padding-bottom material--heading">
          Browse by Materials
        </h3>
        <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center">
          <div style={{ width: "30rem" }}>
            <MaterialCard
              imgPath={"/MainPage/Bamboo.png"}
              imgTitle={"Bamboo"}
            />
          </div>
          <div style={{ width: "30rem" }}>
            <MaterialCard
              imgPath={"/MainPage/CoconutShell.png"}
              imgTitle={"Coconut Shell"}
            />
          </div>
          <div style={{ width: "30rem" }}>
            <MaterialCard
              imgPath={"/MainPage/Wooden.png"}
              imgTitle={"Wooden"}
            />
          </div>
        </div>
      </div>

      {/*###### Our Specifications ######*/}

      <div className="container-fluid padding-top bg-primary ">
        <div className="container text-white">
          <h3 className="heading-padding-bottom material--heading">
            5 Reason To Choose Us
          </h3>
          <div className="row row-cols-2 row-col-md-3 g-5 justify-content-around  spec--padding">
            <SpecContainer
              icon={
                <LocalShippingOutlinedIcon
                  style={{ width: "4rem", height: "4rem" }}
                />
              }
              iconSpec={"Delivery within 2days"}
            />
            <SpecContainer
              icon={
                <LanOutlinedIcon style={{ width: "4rem", height: "4rem" }} />
              }
              iconSpec={"Highly Secured Network"}
            />
            <SpecContainer
              icon={
                <SellOutlinedIcon style={{ width: "4rem", height: "4rem" }} />
              }
              iconSpec={"Industry's Best Packing"}
            />
            <SpecContainer
              icon={
                <SellOutlinedIcon style={{ width: "4rem", height: "4rem" }} />
              }
              iconSpec={"Premium Quality Products"}
            />
            <SpecContainer
              icon={
                <SellOutlinedIcon style={{ width: "4rem", height: "4rem" }} />
              }
              iconSpec={"Whole Sale Price"}
            />
          </div>
        </div>
      </div>

      {/*###### Customers Say ######*/}

      <div className="container-fluid px-0 padding-top padding-bottom bg-altlight">
        <div class="d-flex flex-row mb-3 justify-content-center">
          <div class="p-2">
            <img
              src="/MainPage/Testimonial-bg.png"
              alt="testmonial-bg"
              style={{ width: "40rem" }}
            />
          </div>

          <div className="d-flex flex-column mb-3 align-self-start mt-2">
            <p style={{ fontSize: "2rem", fontWeight: 600 }}>
              What customer say about us
            </p>
            <div
              class="d-flex flex-row mb-3"
              style={{ marginLeft: "-7rem", marginTop: "4rem" }}
            >
              <div className="pe-3">
                <Testimonial
                  reviewerImg={"/MainPage/Jennifer.png"}
                  reviewerAltText={"customer-jnnifer"}
                  reviewerName={"Jennfer"}
                  reviewerPlace={"chennai"}
                  reviewContent={
                    "Product were very nice and quality. On time delivered and good quality of packaging."
                  }
                />
              </div>
              <div className="pe-3">
                <Testimonial
                  reviewerImg={"/MainPage/JohnSmith.png"}
                  reviewerAltText={"customer-johnsmith"}
                  reviewerName={"JohnSmith"}
                  reviewerPlace={"Coimbatore"}
                  reviewContent={
                    "Product were very nice and quality. On time delivered and good quality of packaging."
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="subscribe--positioning">
        <Subscribe />
      </div>
    </div>
  );
}

export default Main;
