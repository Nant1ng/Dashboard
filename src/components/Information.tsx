import { useState } from "react";
import { Link } from "react-router-dom";
import { NewAirbnbType } from "../types/airbnb";

interface IProps {
  data: NewAirbnbType;
  detailsPage?: boolean;
}

function Information({ data, detailsPage }: IProps) {
  const {
    title,
    description,
    feature,
    location,
    stars,
    country,
    region,
    review,
    totalPrice,
    perNight,
    id,
  } = data;

  const [editDescription, setEditDescription] = useState(false);

  return (
    <div className="airbnb-preview">
      <div className="image-container">
        <img className="location-image" src={location} alt="Airbnb" />
        <div className="highlights">
          <div className="highlights-text">
            <h2>{title}</h2>
            <p className="region">{region}</p>
          </div>
          <div className="highlights-price">
            <h2 className="per-night">£{perNight}</h2>
            <p>per night</p>
          </div>
        </div>
      </div>
      <div className="description">
        <span className="reviews">
          <strong className="review-number">{stars} stars</strong> (based on{" "}
          {review} reviews)
        </span>
        <hr />
        <span className="feature">Main Feature: {feature}</span>
        {detailsPage ? (
          <>
            <p className="description-tsxt">
              {description}
              <strong
                className="edit-text"
                onClick={() => setEditDescription(!editDescription)}
              >
                Edit Description
              </strong>
              {editDescription ? <p>Edit Me</p> : null}
            </p>
            <button>Delete Airbnb</button>
          </>
        ) : (
          <Link to={`/airbnbs/${id}`}>
            <button className="moreinfo-btn">View More Information</button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Information;
