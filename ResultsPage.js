import React from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';

export default class ResultsPage extends React.Component {
  static navigationOptions ={
    title: 'Results',
  };
  constructor(props){
    super(props);
    this.state={
      routePrice: -1,
      routeSteps: [],
    };
  }

  async getBestRoute(vehicleData){
    try {
      console.log("state before call: ");
      console.log(this.state);
      console.log("submitting request to server");
      console.log(JSON.stringify(this.state));
      console.log(JSON.stringify(vehicleData));
      let response = await fetch(
        'http://172.20.10.3:5000/api/sandbox/routeprice',{
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            "vehicleData": {
                "make": "Toyota",
                "model": "Camry",
                "year": 2018,
                "transmission": "Automatic (S8)",
                "drive": "Front-Wheel Drive"
            }
          })
        }
      );
      let priceDataJSON = await response.json();
      console.log("route/price data ready: ");
      console.log(priceDataJSON);
      this.setState({
        routePrice: priceDataJSON.lowestCost,
        routeSteps: priceDataJSON.route,
      });
    } catch (error) {
    console.error(error);
  }
  }


  componentDidMount(){
    this.getBestRoute(this.props.navigation.getParam('VehicleSearch', 'no data sad'));
  }
  render() {
    const vehicleData = this.props.navigation.getParam('VehicleSearch', 'no data sad');
    console.log("in vehicleData");
    console.log(vehicleData);
    const routeData = this.props.navigation.getParam('RouteSearch', 'no data sad');
    // const priceData = this.getMileageBQ;

    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Results!</Text>
        <Text>From vehicle search:</Text>
        <Text>make: {vehicleData.make}</Text>
        <Text>model: {vehicleData.model}</Text>
        <Text>year: {vehicleData.year}</Text>
        <Text>transmission: {vehicleData.transmission}</Text>
        <Text>drivetrain: {vehicleData.drive}</Text>
        <Text>Start Location: {routeData.start}</Text>
        <Text>Destination: {routeData.destination}</Text>
        <Text>Results</Text>
        <Text>City Mileage: {vehicleData.cityMileage}</Text>
        <Text>Highway Mileage: {vehicleData.highwayMileage}</Text>
        <Text>Trip Cost: {this.state.routePrice}</Text>
        <FlatList data={this.state.routeSteps} renderItem={({item}) => (<Text>{item.html_instructions}</Text>)}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565'
  },
  container: {
    padding: 30,
    marginTop: 65,
    marginBottom: 65,
    alignItems: 'center'
  },
  flowRight: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  searchInput: {
    height: 36,
    padding: 4,
    marginRight: 5,

    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48BBEC',
    borderRadius: 8,
    color: '#48BBEC',
  },
  image: {
    width: 217,
    height: 138,
  },

});
