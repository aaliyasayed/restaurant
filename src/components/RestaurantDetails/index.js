import React, { Component } from 'react';
import NoImage from '../../assets/images/no_image.jpg';
import Like from '../../containers/LikeContainer';
import Reviews from '../../containers/ReviewsContainer';
import './style.scss';

export default class RestaurantDetails extends Component {
  render() {
    const { resID } = this.props;
    const {
      name,
      user_rating,
      featured_image,
      currency,
      average_cost_for_two,
      cuisines,
      location
    } = this.props.restaurantDetails ? this.props.restaurantDetails : {};
    return (
      <div className="restaurant-details-wrapper">
        <div className="container featured-image">
          <img src={featured_image ? featured_image : NoImage} alt="" />
        </div>
        <div className="container res-header-body">
          <div className="row">
            <div className="col-11">
              <h3 className="res-name">{name || 'N/A'}</h3>
              <span className="user-rating">
                <i className="fa fa-star mr-1" aria-hidden="true"/>
                {(user_rating && user_rating.aggregate_rating)  || 'N/A'} &nbsp;
                ({(user_rating && user_rating.votes)  || 'N/A'} votes)
              </span>
            </div>
            <div className="col-1">
              <Like resID={resID} />
            </div>
          </div>
        </div>
        <div className="container more-details">
          <span className="head-sm">Cost for 2</span>
          <span className="cost-for-2 mb-2">
            {currency} {average_cost_for_two  || 'N/A'}
          </span>

          <span className="head-sm">Cuisines</span>
          <span className="cost-for-2 mb-2">
            {cuisines || 'N/A'}
          </span>

          <span className="head-sm">Address</span>
          <span className="address mb-2">
            { (location && location.address) || 'N/A'}, {location && location.zipcode}
          </span>
        </div>
        <div className="reviews">
          <Reviews resID={resID} static />
        </div>
      </div>
    );
  };

  componentDidMount = () => {
    this.callGetRestaurantDetails();
  }

  componentDidUpdate = (prevProps) => {
    if(this.props.resID !== prevProps.resID) {
      this.callGetRestaurantDetails();
    }
  }

  callGetRestaurantDetails = () => {
    const { resID, getRestaurantDetails } = this.props;
    getRestaurantDetails(resID);
  }
}
