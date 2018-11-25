import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
const portal = document.getElementById('portal');

export default class Loader extends Component {

  loader = document.createElement('div');

  componentDidMount = () => {
    portal.appendChild(this.loader);
  }

  componentWillUnmount = () => {
    portal.removeChild(this.loader);
  }

  render() {
    return ReactDOM.createPortal(
      <div className="universal-loader" />,
      this.loader
    );
  }
}
