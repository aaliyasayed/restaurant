import React, { Component } from 'react';
import './style.scss';

export default class FooterComponent extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          © 2008-2018 - Tomato™ Media Pvt Ltd. All rights reserved.
        </div>
      </footer>
    );
  }
}
