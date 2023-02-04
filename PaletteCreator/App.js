/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import type {Node} from 'react';
import React, {useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
  Switch,
  Pressable
} from 'react-native';

// Components
import CheckBox from './CheckBox';
import ColorBox from './ColorBox';
import ColorPicker from './ColorPicker';

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

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
const Section = ({children, title}): Node => {
  return (
    <View className="mt-8 px-2">
      <Text className="text-2xl text-black dark:text-white">
        {title}
      </Text>
      <Text className="mt-2 text-lg text-black dark:text-white">
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  // Repeated styles
  const backgroundStyle = "bg-neutral-300 dark:bg-slate-900"
  const valueTitle = ""

  // Boolean values that decide whether saturation or hue are shifted
  const [useSaturation, setUseSaturation] = useState(true)
  const [useHue, setUseHue] = useState(true)

  const [numInputColors, setNumInputColors] = useState(0)

  return (
    <SafeAreaView className={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        className={backgroundStyle}>
        <View className="bg-white dark:bg-black">
          <View className="flex ">
            <CheckBox 
            isChecked={useSaturation}
            onPress={() => setUseSaturation(!useSaturation)}
            />
            <Text className="text-xl text-black dark:text-white">
              Saturation
            </Text>
            <ColorBox color='#164E63'/>
          </View>
          <Pressable style={[
            styles.colorBox,
            {
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(52, 52, 52, 0.0)',
              borderColor: isDarkMode ? '#0891B2' : '#2563EB',
            }
            ]}
            onPress={() => setNumInputColors(numInputColors + 1)}>
            <Text className="text-5xl text-blue-600 dark:text-cyan-600 font-extralight">
              {numInputColors}
            </Text>
          </Pressable>
          <ColorPicker />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
