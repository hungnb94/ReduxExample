import React from 'react';
import {Button} from 'react-native';

const ButtonComp = ({title, onPress, bgColor}) => (
  <Button
    style={{marginBottom: 10}}
    color={bgColor}
    title={title}
    onPress={onPress}
  />
);

export default ButtonComp;
