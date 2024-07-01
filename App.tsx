/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {Text, View} from 'react-native';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App() {
  return (
    <View>
      <Text>App Distribution</Text>
    </View>
  );
}

export default App;
