import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, } from 'react-native';
import PercentageDimensionsBasics from './src/telalogin';

const App = () => {
  return (
    <SafeAreaView>
      <PercentageDimensionsBasics/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1
    },  
});
