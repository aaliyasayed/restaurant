import React, { Component } from 'react';
import Loader from '../Loader';
import { ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        { this.props.loading && <Loader /> }
        { this.props.children }
        <ToastContainer
          transition={Slide}
          position="top-right"
          autoClose={5000}
          hideProgressBar
          closeOnClick
          pauseOnVisibilityChange
          draggable={false}
          pauseOnHover={false} />
      </React.Fragment>
    );
  }
}
