/* eslint-disable no-unused-expressions */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

export default class SearchBarComponent extends Component {
  state = {
    keyword: ''
  }
  render() {
    const { result } = this.props;
    return (
      <div className="search-wrapper">
        <div className="row align-items-center">
          <div className="col">
            <div className="input-group">
              <input
                value={this.state.keyword}
                onChange={(e) => this.setState({ keyword: e.target.value })}
                type="text"
                className="form-control"
                placeholder="Search for restaurants" />
              <div className="input-group-append">
                { (this.state.keyword || result) &&  <span onClick={this.clearSearch} className="btn btn-warning"><i className="fa fa-times" aria-hidden="true" /></span>}
                <button
                  onClick={this.search}
                  className="btn btn-primary"
                  type="button">
                  Search
                </button>
              </div>
            </div>
            {
              result && (
                <ul className="search-suggestions">
                  {
                    result.length && this.state.keyword !== ''
                      ? result.map( ({ restaurant }, key ) => {
                        return (
                          <li key={key}>
                            <Link to={`/details/${restaurant.id}`} onClick={this.clearSearch}>{restaurant.name}</Link>
                          </li>
                        );
                      })
                      : ( <li>No result found for <strong>{this.state.keyword}</strong></li> )
                  }
                </ul>
              )
            }
          </div>
        </div>
      </div>
    );
  }

  clearSearch = () => {
    this.setState({
      keyword: '',
    }, this.props.clearSearchedRestaurant);
  }

  search = () => {
    const { keyword } = this.state;
    if(keyword) {
      this.props.searchRestaurants(keyword);
    }
  }
}
