import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class Header extends React.Component{
  render(){
    return(
      <View style = {styles.container}>
        <Text style = {styles.displayText}>Quiz App </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  displayText:{
    backgroundColor: 'indigo',
    color: 'white',
    textAlign: 'center',
    fontSize: 30
  }
})