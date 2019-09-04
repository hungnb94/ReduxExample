import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

const TAG = 'Child';

class Child extends Component {
  render() {
    console.log(TAG, this.props.counter);
    return (
      <View>
        <Text style={styles.text}>{this.props.counter}</Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  counter: state.counter,
});

export default connect(
  mapStateToProps,
  null,
)(Child);

const styles = StyleSheet.create({
  text: {
    fontSize: 100,
    color: '#000',
  },
});
