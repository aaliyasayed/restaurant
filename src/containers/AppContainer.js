import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Component from '../components/App';

const mapStateToProps = (state) => ({
  loading: state.restaurantDuck.loading
});

const mapDispatchToProps = () => ({});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Component));