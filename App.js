import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import VehicleSearch from './VehicleSearch';
import RouteSearch from './RouteSearch'
import ResultsPage from './ResultsPage'

class HomeScreen extends React.Component {
  static navigationOptions ={
    title: 'Home',
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Start here</Text>
        <Button
          title="Let's get started"
          onPress={() => this.props.navigation.navigate('VehicleSearch')}
        />
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    VehicleSearch: VehicleSearch,
    RouteSearch: RouteSearch,
    ResultsPage: ResultsPage,
  },
  {
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(AppNavigator);


export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
