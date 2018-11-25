import React, { Component } from 'react';
import { storeLikesToLocalStorage, getLikesFromLocalStorage } from '../../libs/helpers';
import './style.scss';

const likes = getLikesFromLocalStorage();

const updateLike = (cityID) => {
  const index = likes.indexOf(cityID);
  let status;
  if (index > -1) {
    likes.splice(index, 1);
    status = false;
  } else {
    likes.push(cityID);
    status = true;
  }
  storeLikesToLocalStorage(likes);
  return status;
};

const hasLiked = cityID => likes.includes(cityID);

export default class LikeComponent extends Component {
  state = {
    liked: hasLiked(this.props.resID)
  }

  handleClick = (resID) => {
    this.setState({
      liked: updateLike(resID)
    });
  };

  render() {
    return (
      <span className="like-wrapper" onClick={ () => this.handleClick(this.props.resID) }>
        <LikeButton resID={this.props.resID} liked={this.state.liked} />
      </span>
    );
  }
}

const LikeButton = ({ liked }) => {
  return <i className={`fa ${liked ? 'fa-heart' : 'fa-heart-o'}`} aria-hidden="true"/>;
};
