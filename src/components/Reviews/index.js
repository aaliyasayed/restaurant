import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

export default class Reviews extends Component {
  render() {
    let userReviews = this.props.reviews ? this.props.reviews.user_reviews : [];
    userReviews = userReviews.map((r, key) =>
      <ReviewNode key={key} userReviews={r.review} />
    );
    return (
      <div className="container review-wrapper">
        <div className="head-md mb-2">Reviews</div>
        { this.props.static ? (
          <React.Fragment>
            {userReviews}
            <Link
              className="btn btn-primary mt-5 ml-3"
              to={`/reviews/${this.props.resID}`}>
              Show More
            </Link>
          </React.Fragment>
        ) : userReviews }
      </div>
    );
  }

  componentDidMount = () => {
    const { resID, getReviews } = this.props;
    getReviews(resID);
  };
}

const ReviewNode = ({ userReviews }) => {
  const { rating, review_text, review_time_friendly, user } = userReviews;
  const { name, profile_image } = user;
  return (
    <div className="review-card">
      <div className="row">
        <div className="col-auto">
          <img className="profile-pic card-img-left" src={profile_image} alt="" />
        </div>
        <div className="col">
          <div className="user-details">
            <span className="user-name">{name}</span> <br />
            <span className="user-rating"><strong>Rated: {rating}</strong></span> <br />
            <span className="badge badge-secondary review-time">{review_time_friendly}</span> <br />
            <span className="review-text">{review_text}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
