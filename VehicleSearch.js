import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default class VehicleSearch extends React.Component {
  static navigationOptions ={
    title: 'Vehicle Search',
  };

  constructor(props) {
    super(props);
    this.state = {
      make: '',
      model: 'Select your car model',
      year: 'Select your car year',
      transmission: 'Select your vehicle transmission',
      drive: 'Select your vehicle drivetrain'
    };
  }
  _onMakeTextChanged = (event) => {
    this.setState({
      make: event.nativeEvent.text
    })
  };


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
    flexGrow: 1,
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
