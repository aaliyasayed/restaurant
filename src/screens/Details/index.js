import React, { Component } from 'react';
import RestaurantDetails from '../../containers/RestaurantDetailsContainer';

export default class Details extends Component {
  state = {
    resID: this.props.match.params.id
  }
  render() {
    return <RestaurantDetails resID={this.state.resID} />;
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    const resID = nextProps.match.params.id;
    if(resID !== prevState.resID) {
      return {
        resID
      };
    }
    return null;
  }
}
