import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class ResultsPage extends React.Component {
  static navigationOptions ={
    title: 'Results',
  };
  render() {
    const vehicleData = this.props.navigation.getParam('VehicleSearch', 'no data sad');
    const routeData = this.props.navigation.getParam('RouteSearch', 'no data sad');

    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Results!</Text>
        <Text>From vehicle search:</Text>
        <Text>make: {vehicleData.make}</Text>
        <Text>model: {vehicleData.model}</Text>
        <Text>year: {vehicleData.year}</Text>
        <Text>transmission: {vehicleData.transmission}</Text>
        <Text>drivetrain: {vehicleData.drive}</Text>
        <Text>From route search:</Text>
        <Text>Start Location: {routeData.start}</Text>
        <Text>Destination: {routeData.destination}</Text>
        <Text>Results</Text>
        <Text>City Mileage: {vehicleData.cityMileage}</Text>
        <Text>Highway Mileage mileage: {vehicleData.highwayMileage}</Text>
      </View>
    );
  }
}
