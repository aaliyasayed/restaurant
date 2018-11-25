import React, { Component } from 'react';
import './style.scss';

export default class CityDropdown extends Component {

  onSelect = (city) => {
    this.props.onCitySelected(city);
    this.props.getRestaurantsByCityID(city.cityID);
    if(window.location.pathname === '/' ) {
      window.location = '/listing';
    }
  }

  hitGeolocation = (flag = false) => {
    const { hitGeolocation, getGeolocation } = this.props;
    hitGeolocation(location => getGeolocation({
      lat: location.coords.latitude,
      lon: location.coords.longitude
    }), flag);
  }

  componentDidMount = () => {
    const { getCurrentCityFromLocalStorage } = this.props;
    if(!getCurrentCityFromLocalStorage()){
      this.hitGeolocation();
    }
  }

  render() {
    const { defaultCities, currentCity } = this.props;
    return (
      <div className="city-selector">
        <div className="dropdown">
          <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown">
            { currentCity ? currentCity.cityName : 'Choose a city' }
          </button>
          <div className="dropdown-menu">
            {
              defaultCities.map((city, key) => {
                return (
                  <div
                    onClick={() => this.onSelect(city)}
                    className="dropdown-item"
                    key={key}>
                    {city.cityName}
                  </div>
                );
              })
            }
          </div>
        </div>
        <span onClick={() => this.hitGeolocation(true)} className="current-location">
          <i className="fa fa-crosshairs" aria-hidden="true" />
        </span>
      </div>
    );
  }
};
