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
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={[styles.text, styles.title]}>React Native Productive</Text>
        <Image style={styles.image} source={logo} />
        <View style={styles.deciderContainer}>
          <Text>What to do next?</Text>
          {/* TODO: show decided activity */}
          <Button title="Decide" />
        </View>
        <View style={styles.addActivityContainer}>
          <TextInput
            placeholder="add new activity"
            style={styles.textInput}
          />
          <Button title="Add Activity" />
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
  }
});
