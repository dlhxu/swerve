import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class RouteSearch extends React.Component {
  static navigationOptions ={
    title: 'Route Search',
  };
  constructor(props) {
    super(props);
    this.state = {
      start: 'Start location',
      destination:'Destination',
    };
  }
  render() {
    const vehicleData = this.props.navigation.getParam('VehicleSearch', 'no data sad');
    // console.log(vehicleData);
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>RouteSearchPlaceholder</Text>
        <Text>From vehicle search:</Text>
        <Text>make: {vehicleData.make}</Text>
        <Text>model: {vehicleData.model}</Text>
        <Text>year: {vehicleData.year}</Text>
        <Text>transmission: {vehicleData.transmission}</Text>
        <Text>drivetrain: {vehicleData.drive}</Text>
        <Text>Start Location: {this.state.start}</Text>
        <Text>Destination: {this.state.destination}</Text>
        <Button
          title="Let's go to our results"
          onPress={() => this.props.navigation.navigate('ResultsPage', {
            VehicleSearch: vehicleData,
            RouteSearch: this.state,
          })}
        />
      </View>
    );
  }
}
