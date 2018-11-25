import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer';

export default class Reviews extends Component {
  render() {
    const resID = this.props.match.params.id;
    return (
      <ReviewsContainer resID={resID}/>
    );
  }
}
