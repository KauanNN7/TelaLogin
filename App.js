import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, } from 'react-native';
import PercentageDimensionsBasics from './src/telalogin';

export default function app() {
  <View styles = {styles.container}>
    <PercentageDimensionsBasics></PercentageDimensionsBasics>
  </View>
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      JustifyContent: 'center',
    },  
});
