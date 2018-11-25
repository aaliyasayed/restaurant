import React, { Component } from 'react';
import BannerComponent from '../../components/Banner';
import City from '../../containers/CityContainer';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <BannerComponent />
        <City />
      </div>
    );
  }
}

export default Home;
