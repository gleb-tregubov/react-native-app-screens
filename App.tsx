import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import {ThemeProvider} from 'react-native-elements'
import { Profile } from './src/screens/Profile';
import { Settings } from './src/screens/Settings';


export default function App() {
  return (
    <ThemeProvider>
    <View style={styles.container}>
      <Settings/>
      {/* <Profile/> */}
    </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
