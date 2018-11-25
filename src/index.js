import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import './styles/main.scss';

import Header from './components/Header';
import Footer from './components/Footer';

import App from './containers/AppContainer';

import HomePage from './screens/Home';
import ListingPage from './screens/Listing';
import DetailsPage from './screens/Details';
import ReviewsPage from './screens/Reviews';

class Index extends Component {
  render() {
    return (
      <Router>
        <Provider store={store}>
          <App>
            <Header />
            <div className="main-wrapper">
              <Switch>
                <Route path="/" component={HomePage} exact/>
                <Route path="/listing" component={ListingPage} />
                <Route path="/details/:id" component={DetailsPage} />
                <Route path="/reviews/:id" component={ReviewsPage} />
              </Switch>
            </div>
            <Footer />
          </App>
        </Provider>
      </Router>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
