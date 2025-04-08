import "./MaterialCard.css";

function MaterialCard({ imgPath, imgTitle }) {
  return (
    <>
      <div className="col">
        <div className="card ">
          <img
            src={imgPath}
            className="card-img-top"
            alt="image"
            style={{ height: "39rem" }}
          />
          <div className="card-body bg-bglight">
            <h5 className="card-title text-card--title fw-bold">{imgTitle}</h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default MaterialCard;
