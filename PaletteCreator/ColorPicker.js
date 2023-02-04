import React, {useState} from 'react';
import { 
  StyleSheet, 
  View, 
  Pressable,
  Text, 
} from 'react-native';

import { Slider } from '@miblanchard/react-native-slider';

const styles = StyleSheet.create({
  
})

const ColorPicker = props => {
  return(
    <View>
      <Slider/>
    </View>
  )
}

export default ColorPicker