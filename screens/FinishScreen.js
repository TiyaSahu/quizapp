import React from 'react';
import {View, Image ,Text, StyleSheet} from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";

export default class FinishScreen extends React.Component{
  render(){
    return(
      
      <View>
      <Text style={styles.displaytext}> Congrats you completed the quiz</Text>
      </View>
    )
  }
}

const styles=StyleSheet.create({
displaytext:{
  fontSize:40,
  fontWeight:'blod',
  alignItems:'center',
  marginTop:80
}
})