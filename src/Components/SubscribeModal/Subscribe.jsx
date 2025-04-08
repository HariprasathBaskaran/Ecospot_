import "./Subscribe.css";

function Subscribe() {
  return (
    <div className="subscribe-container bg-bglight">
      <div>
        <p className="subscribe--heading">
          subscribe To our Newsletter for New Product Insights
        </p>
        <p className="subscribe--content">
          Be first to discover trends, environment safety, Eco-friendly product
          which discover to website get directly to your inbox
        </p>
      </div>
      <div>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control me-3 subscribe--input"
            placeholder="Enter your mail address"
            aria-label="Mail Address"
            aria-describedby="button-addon2"
          />
          <button
            className="btn btn-outline-primary"
            type="button"
            id="button-addon2"
          >
            Button
          </button>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
