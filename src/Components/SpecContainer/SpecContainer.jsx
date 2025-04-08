import React from "react";
import "../SpecContainer/SpecContainer.css";

function SpecContainer({ icon, iconSpec }) {
  return (
    <div style={{ width: "20.5rem", height: "11.5rem" }}>
      <div>{icon}</div>
      <div>
        <p style={{ fontSize: "1.2rem" }}>{iconSpec}</p>
      </div>
    </div>
  );
}

export default SpecContainer;
