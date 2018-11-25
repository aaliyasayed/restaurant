import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NoImage from '../../assets/images/no_image_small.jpg';
import Like from '../../containers/LikeContainer';
import InfiniteScroll from 'react-infinite-scroller';
import './style.scss';

export default class RestaurantListing extends Component {
  render() {
    const { restaurants, currentCity } = this.props;
    return (
      <div className="container restaurant-list-wrapper">
        {
          (restaurants && restaurants.length) && (
            <React.Fragment>
              <p className="current-city mt-4">
                Looking restaurants in: <strong>{currentCity.cityName}</strong>
              </p>
              <InfiniteScroll
                className="row"
                pageStart={0}
                loadMore={this.callGetRestaurants}
                hasMore>
                { restaurants.map(({ restaurant }, key) => <RestaurantNode key={key} {...restaurant} />) }
              </InfiniteScroll>
            </React.Fragment>
          )
        }
      </div>
    );
  };

  componentDidMount = () => {
    this.callGetRestaurants();
  }

  callGetRestaurants = () => {
    const { currentCity, getRestaurantsByCityID } = this.props;
    if(currentCity) {
      getRestaurantsByCityID(currentCity.cityID);
    } else {
      window.location = '/';
    }
  }
}

const RestaurantNode = ({ id, thumb, name, cuisines, user_rating }) => {
  return (
    <div className="col-md-4 col-sm-6 animated fadeInUp">
      <div className="card">
        <Like resID={id} />
        <Link to={`/details/${id}`}>
          <div className="row no-gutters">
            <div className="col-6">
              <img className="card-img-left" src={thumb ? thumb : NoImage} alt="" />
              <span className="badge rating">{user_rating.aggregate_rating}</span>
            </div>
            <div className="col-6">
              <div className="card-body">
                <h5 className="card-title">
                  {name}
                </h5>
                <p className="card-text">
                  {cuisines.split(',').map((c, key) => <span className="badge cuisines" key={key}>{c}</span>)}
                </p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};



