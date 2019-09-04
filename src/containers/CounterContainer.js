import {connect} from 'react-redux';
import CounterComponent from '../components/CounterComponent';

import {counterIncrease, counterDecrease} from '../actions';

const mapStateToProps = state => {
  return {
    counter: state.counter ? state.counter : 0,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrement: () => {
      dispatch(counterIncrease());
    },
    onDecrement: () => {
      dispatch(counterDecrease());
    },
  };
};
const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CounterComponent);
export default CounterContainer;
