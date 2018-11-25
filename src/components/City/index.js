import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

export default class CityComponent extends Component {
  render() {
    return (
      <div className="container city-wrapper">
        <div className="row">
          <div className="col">
            <div className="headline">
              <h2 className="head-lg">Popular <strong>Locations</strong></h2>
            </div>
          </div>
        </div>
        <div className="row popular-localities">
          {
            this.props.defaultCities.map((city, i) => {
              return <CityNode key={i} { ...city } onCitySelected={() => this.props.onCitySelected(city)} />;
            })
          }
        </div>
      </div>
    );
  }
}

const CityNode = ({ cityName, imgURL, onCitySelected }) => {
  return (
    <div className="col-md-3 col-sm-4">
      <Link to="/listing" onClick={onCitySelected}>
        <div className="locality">
          <img src={imgURL} alt={cityName} />
          <h2>{cityName}</h2>
        </div>
      </Link>
    </div>
  );
};
