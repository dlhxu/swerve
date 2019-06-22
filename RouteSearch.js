import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default class RouteSearch extends React.Component {
  static navigationOptions ={
    title: 'Route Search',
  };
  constructor(props) {
    super(props);
    this.state = {
      origin: 'Town Hall, Sydney, NSW',
      destination:'Parramatta, NSW',
    };
  }
  render() {

    const vehicleData = this.props.navigation.getParam('VehicleSearch', 'no data sad');
    // console.log(vehicleData);
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Route Search</Text>
        <Text>From vehicle search:</Text>
        <Text>make: {vehicleData.make}</Text>
        <Text>model: {vehicleData.model}</Text>
        <Text>year: {vehicleData.year}</Text>
        <Text>transmission: {vehicleData.transmission}</Text>
        <Text>drivetrain: {vehicleData.drive}</Text>
        <Text>Origin</Text>
        <TextInput value={this.state.origin}/>
        <Text>Destination</Text>
        <TextInput value={this.state.destination}/>
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
