import React from "react";
import { Link } from "react-router-dom";
export default function Condo(props) {
  return (
    <article className="condo">
      <div className="img-container">
        <img
          src={
            props.img
              ? props.img
              : "https://c4.wallpaperflare.com/wallpaper/745/584/835/apartment-architecture-building-condo-wallpaper-preview.jpg"
          }
          alt={"Building"}
        />
      </div>
      <div className="condo-footer">
        <h3>{props.project}</h3>
        <h4>
          District {props.district}, {props.street}
        </h4>
        <p>TOP Year: {props.expectedTOPYear}</p>
        <Link
          to={`/condo/${props.project}`}
          className="btn btn-primary btn-details"
        >
          details
        </Link>
      </div>
    </article>
  );
}
