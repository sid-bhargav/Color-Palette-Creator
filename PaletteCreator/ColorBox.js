import Reactm, {useState} from 'react';
import { 
  StyleSheet, 
  View, 
  Pressable 
} from 'react-native';

const styles = StyleSheet.create({
  colorBox: {
    backgroundColor: '#CBD5E1',
    borderColor: '#94A3B8',
    borderWidth: 1.5,
    borderRadius: 5,
    width: 60,
    height: 60,
  },
})

const ColorBox = props => {

  const [color, setColor] = useState('#CBD5E1') 

  return(
    <Pressable style={[
      styles.colorBox,
      {
        backgroundColor: color
      }
      ]}>
      
    </Pressable>
  )
}

export default ColorBox