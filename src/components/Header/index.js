import React, { Component } from 'react';
import Search from '../../containers/SearchContainer';
import { Link } from 'react-router-dom';
import { getCurrentCityFromLocalStorage } from '../../libs/helpers';
import CityDropdown from '../../containers/CityDropdownContainer';
import './style.scss';

class HeaderComponent extends Component {
  render() {
    if(getCurrentCityFromLocalStorage() && window.location.pathname === '/') {
      window.location = '/listing';
    }
    const isLanding = window.location.pathname === '/' ? true : false;
    return (
      <nav className="header">
        <div className="container">
          <div className="row d-flex justify-content-between align-items-center">
            <div className="col-auto">
              <Logo />
            </div>
            {
              !isLanding ? (
                <div className="col-6">
                  <Search />
                </div>
              ) : null
            }
            <div className="col-auto">
              <CityDropdown />
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

const Logo = () => {
  return (
    <div className="logo">
      <Link to="/">
        La impresión
      </Link>
    </div>
  );
};

export default HeaderComponent;
