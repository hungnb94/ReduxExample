import React from 'react';
import {View} from 'react-native';
import ButtonComp from './ButtonComp';
import Child from './Child';

class CounterComponent extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          width: '100%',
          justifyContent: 'center',
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Child />
        </View>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <ButtonComp
            title="Increase"
            bgColor="blue"
            onPress={() => {
              this.props.onIncrement();
            }}
          />
          <ButtonComp
            title="Decrease"
            bgColor="orange"
            onPress={() => {
              this.props.onDecrement();
            }}
          />
        </View>
      </View>
    );
  }
}

export default CounterComponent;
