import * as React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert, Image} from 'react-native';
import Header from '../components/Header';

export default class Question3 extends React.Component{
 nextScreen =()=>{
   this.props.navigation.navigate("Question4");
 }
   displayAlert() {
    alert('Your answer is correct');
  }
  displayAlert1() {
    alert('opps! your answer is wrong ary again');
  }
  render(){
    return(
      <View>
      <Header/>
      <Image source={require("../assets/flag.jpg")} style={styles.flagImage}/>
      <Text style = {styles.text}>
     (3) Name the country by its flag 
      </Text>
      <TouchableOpacity style={styles.button}onPress={this.displayAlert1}>
      <Text style={styles.buttonText}>a. India</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button2}onPress={this.displayAlert1}>
      <Text style={styles.buttonText}>b. Indonesia</Text>
     
      </TouchableOpacity>
       <TouchableOpacity style={styles.button3}onPress={this.displayAlert}>
      <Text style={styles.buttonText}>c. Ireland</Text>
      </TouchableOpacity>
       <TouchableOpacity style={styles.button4}onPress={this.displayAlert1}>
      <Text style={styles.buttonText}>d. Greece</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button5}
      onPress = {()=>{
          this.nextScreen()
        }}>
        <Text style = {styles.buttonText1}>Next</Text>
        </TouchableOpacity>
      </View>

    )
  }
}
 
const styles = StyleSheet.create({
  text:{
    fontWeight: 'bold',
    marginTop: 10,
    color: '#000080',
    fontSize: 20,
  },
  button:{
     width:130,
    height:40,
    backgroundColor:"#fae473",
    marginTop:30,
    marginLeft:20,
    borderRadius:30
    },

   button2:{
     width:130,
    height:40,
    backgroundColor:"#ff66cc",
    marginTop:-40,
    marginLeft:180,
    borderRadius:30
     },

      button3:{
     width:150,
    height:40,
    backgroundColor:"#98fb98",
    marginTop:50,
    marginLeft:20,
    borderRadius:30
     },

 button4:{
     width:150,
    height:40,
    backgroundColor:"#73c2fb",
    marginTop:-38,
    marginLeft:180,
    borderRadius:30
     },

  buttonText:{
    fontSize:20,
    color:'#81007F',
    alignItems:'center',
    alignSelf:'center',
    margineTop:10
  },
  flagImage:{
    width:"100%",
    height:150
    
  },
   button5: {
    width:205,
    height: 60,
    backgroundColor: '#5097a4',
    alignSelf: 'center',
    marginTop: 40,
    borderRadius: 30,
    alignItems: 'center'
  },
  buttonText1:{
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    alignText: 'center',
    alignSelf: 'center',
    marginTop: 10
  }
})