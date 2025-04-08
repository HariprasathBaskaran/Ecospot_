import "./Testimonial.css";

function Testimonial({
  reviewerImg,
  reviewerAltText,
  reviewerName,
  reviewerPlace,
  reviewContent,
}) {
  return (
    <div className="testimonial-container bg-testimonial-bg text-altlight">
      <div className="d-flex flex-row mb-3 align-items-center ">
        <div className="pe-2 ">
          <img
            src={reviewerImg}
            alt={reviewerAltText}
            style={{ width: "5.5rem" }}
          />
        </div>
        <div className="ps-2 left-alignment">
          <p className=" fw-bold h4">{reviewerName}</p>
          <span>{reviewerPlace}</span>
        </div>
      </div>
      <p className="testimonial--review lh-2 left-alignment">{reviewContent}</p>
    </div>
  );
}

export default Testimonial;
