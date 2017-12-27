/**
 * React Native Basics Part 2 (Buttons, TextInput and State)
 * https://github.com/lohanitech/RNProductive
 * Author: Damodar Lohani
 * @flow
 */

import React, { Component } from 'react';
import {
  TextInput,
  Text,
  View,
  ScrollView,
  Button,
  Image,
  StyleSheet,
  Platform
} from 'react-native';
import logo from './logo.png';


export default class App extends Component<{}> {
  constructor(props){
    super(props)
    this.state = {
      activities: ["Code", "Drink Water", "Eat", "Nap"],
      decidedActivity: 0,
      addActivityText: ''
    }
  }

  componentWillMount() {
    this.decide()
  }

  decide = () => {
    let random = Math.floor(Math.random() * this.state.activities.length)
    this.setState({
      decidedActivity: random
    })
  }

  handleAddActivity = () => {
    if(this.state.addActivityText !== ''){
      this.setState((previousState)=> ({
        activities: previousState.activities.concat([previousState.addActivityText]),
        addActivityText: ''
      }))
    }
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={[styles.text, styles.title]}>React Native Productive</Text>
        <Image style={styles.image} source={logo} />
        <View style={styles.deciderContainer}>
          <Text style={{fontSize: 18, color: '#333'}}>What to do next?</Text>
          <Text style={styles.decidedText}>{this.state.activities[this.state.decidedActivity]}</Text>
          <Button
            title="Decide"
            onPress={this.decide}
          />
        </View>
        <View style={styles.addActivityContainer}>
          <TextInput
            placeholder="add new activity"
            style={styles.textInput}
            onChangeText={(text)=>this.setState({addActivityText: text})}
            value={this.state.addActivityText}
          />
          <Button title="Add Activity" onPress={this.handleAddActivity} />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20,
    justifyContent: 'space-between'
  },
  deciderContainer: {
    flex: 3,
    alignItems: 'center',
  },
  addActivityContainer: {
    flex: 2,
  },
  image: {
    alignSelf: 'center'
  },
  textInput: {
    ...Platform.select({
      ios: {
        borderBottomWidth: 1,
        borderBottomColor: '#eeeeee'
      }
    })
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '900'
  },
  text: {
    color: '#087f23'
  },
  decidedText: {
    color: '#008080',
    fontSize: 28,
    padding: 10
  }
});
