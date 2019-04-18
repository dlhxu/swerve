import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default class VehicleSearch extends React.Component {
  static navigationOptions ={
    title: 'Vehicle Search',
  };

  constructor(props) {
    super(props);
    this.state = {
      make: 'Toyota',
      model: 'Camry',
      year: 2018,
      transmission: 'Automatic (S8)',
      drive: 'Front-Wheel Drive',
      cityMileage:'',
      highwayMileage: '',
    };
  }
  _onMakeTextChanged = (event) => {
    this.setState({
      make: event.nativeEvent.text
    })
  };

  async getMileageBQ() {
  try {
    console.log("requesting from node now")
    console.log("state before api call: ")
    console.log(this.state);
    console.log(JSON.stringify(this.state));
    let response = await fetch(
      'http://10.255.136.8:5000/api/swerve-vehicle-data',{
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.state),
      }
    );
    // pass as props to rest of the pages
    let mileageDataJSON = await response.json();
    console.log(mileageDataJSON);
    this.setState({
      cityMileage: mileageDataJSON.cityMileage,
      highwayMileage: mileageDataJSON.highwayMileage,
    });
    console.log("state following api call: ")
    console.log(this.state);
  } catch (error) {
    console.error(error);
  }
}

  render() {
    return (
      <View style={styles.container}>
        <View styles={styles.flowRight}>
          <Text style={styles.searchInput}>Your car</Text>
          <TextInput
            style={styles.searchInput}
            value={this.state.make}
            onChangeText={(text) => this.setState({make:text})}
            placeholder='Select your car manufacturer'/>
            <Text style={styles.searchInput}>{this.state.model}</Text>
            <Text style={styles.searchInput}>{this.state.year}</Text>
            <Text style={styles.searchInput}>{this.state.transmission}</Text>
            <Text style={styles.searchInput}>{this.state.drive}</Text>
        </View>

        <Button
          style={styles.searchInput}
          title="Calculate your mileage!"
          onPress={() => this.getMileageBQ()}
        />
        <View>
          <Text style={styles.searchInput}>City Mileage: {this.state.cityMileage}</Text>
          <Text style={styles.searchInput}>Highway Mileage: {this.state.highwayMileage}</Text>
        </View>

        <Button
          style={styles.searchInput}
          title="Let's go to Route Search"
          onPress={() => this.props.navigation.navigate('RouteSearch', {VehicleSearch: this.state})}
        />
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
