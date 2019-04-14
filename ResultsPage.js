import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class ResultsPage extends React.Component {
  static navigationOptions ={
    title: 'Results',
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Results</Text>
      </View>
    );
  }
}
