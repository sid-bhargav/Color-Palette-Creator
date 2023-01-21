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
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
  Switch,
} from 'react-native';

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

  return (
    <SafeAreaView className={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        className={backgroundStyle}>
        <View className="bg-white dark:bg-black ">
          <View className="flex ">
            <Text className="text-xl text-black dark:text-white">
              Saturation
            </Text>
            <Switch 
              value={useSaturation}
              onValueChange={setUseSaturation}
            />
          </View>
          <View className="flex"> 
            <Text className="text-xl text-black dark:text-white">
              Hue
            </Text>
            <Switch 
              value={useHue}
              onValueChange={setUseHue}
            />
          </View>
          <Section title="Select Colors">
            <Text className={valueTitle}>
              Select Colors
            </Text>
          </Section>
          <Section title="Number of Shades">
            <Text className={valueTitle}>
              Number of Shades
            </Text>
          </Section>
          <Section title="Saturation Shift Multiplier">
            <Text className={valueTitle}>
              Saturation shift multiplier
            </Text>
          </Section>
          <Section title="Hue Shift Multiplier">
            <Text className={valueTitle}>
              Hue shift multiplier
            </Text>
          </Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
