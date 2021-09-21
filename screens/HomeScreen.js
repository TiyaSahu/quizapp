import * as React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Button, Image} from 'react-native';
import Header from '../components/Header';

export default class HomeScreen extends React.Component{
  nextScreen =()=>{
    this.props.navigation.navigate('Question1');
  }

  render(){
    return(
      <View style = {styles.container}>
       <Image source={require("../assets/quiztime.png")} style={styles.quizImage}/>
     
        <Text style = {styles.displayText}>
       Welcome to quiz app choose the correct answer according to the question
        </Text>
       
        <TouchableOpacity style = {styles.button}
        onPress = {()=>{
          this.nextScreen()
        }}>
        <Text style = {styles.buttonText}>Start</Text>
        </TouchableOpacity>
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  displayText:{
    color: 'black',
    textAlign: 'center',
    fontSize: 17,
    marginTop:30
  },
  button: {
    width:205,
    height: 60,
    backgroundColor: 'orange',
    alignSelf: 'center',
    marginTop: 80,
    borderRadius: 30,
    alignItems: 'center'
  },
  quizImage:{
    width:"100%",
    height:200
    
  },
  buttonText:{
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    alignText: 'center',
    alignSelf: 'center',
    marginTop: 10
  }
  
})