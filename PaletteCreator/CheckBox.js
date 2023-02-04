import React from 'react';
import { 
  StyleSheet, 
  View, 
  Pressable 
} from 'react-native';

const styles = StyleSheet.create({
  boxChecked: {
    backgroundColor: '#60A5FA',
    borderColor: '#2563EB',
    borderWidth: 1.5,
    borderRadius: 5,
    width: 20,
    height: 20,
  },
  boxUnchecked: {
    backgroundColor: '#F8FAFC',
    borderColor: '#2563EB',
    borderWidth: 1.5,
    borderRadius: 5,
    width: 20,
    height: 20,
  },
})

const CheckBox = props => {
  // const boxStyle = props.isChecked ? {styles.boxClicked} : "bg-red-100"
  return(
    <View className="">
      <Pressable style={props.isChecked ? styles.boxChecked : styles.boxUnchecked} onPress={props.onPress}>
      </Pressable>
    </View>
  )
}

export default CheckBox