import React, { Component } from 'react';
import './style.scss';

export default class BannerComponent extends Component {
  render() {
    return (
      <div className="container-fluid banner">
        <div className="overlay-texture"/>
      </div>
    );
  }
}
