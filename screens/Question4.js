import * as React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert, Image} from 'react-native';
import Header from '../components/Header';

export default class Question4 extends React.Component{
 nextScreen=()=>{
   this.props.navigation.navigate("FinishScreen");
 }
   displayAlert() {
    alert('Your answer is correct');
  }
  displayAlert1() {
    alert('opps! your answer is wrong try again');
  }
  render(){
    return(
      <View>
      <Header/>
      <Image source={require("../assets/Elk.jpg")} style={styles.flagImage}/>
      <Text style = {styles.text}>
     (4) The largest member of the deer family, found in the Northen Hemisphere name it.
      </Text>
      <TouchableOpacity style={styles.button}onPress={this.displayAlert1}>
      <Text style={styles.buttonText}>a. Reindeer</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button2}onPress={this.displayAlert1}>
      <Text style={styles.buttonText}>b. Chital</Text>
     
      </TouchableOpacity>
       <TouchableOpacity style={styles.button3}onPress={this.displayAlert1}>
      <Text style={styles.buttonText}>c. Roe deer</Text>
      </TouchableOpacity>
       <TouchableOpacity style={styles.button4}onPress={this.displayAlert}>
      <Text style={styles.buttonText}>d. Elk</Text>
      </TouchableOpacity>
       <TouchableOpacity style={styles.button5}
      onPress = {()=>{
          this.nextScreen()
        }}>
        <Text style = {styles.buttonText1}>Finish</Text>
        </TouchableOpacity>
      </View>

    )
  }
}
 
const styles = StyleSheet.create({
  text:{
    marginTop: 10,
    color: 'brown',
    fontSize: 15,
    fontWeight:'bold'
  },
  button:{
     width:130,
    height:40,
    backgroundColor:"#e4a0f7",
    marginTop:10,
    marginLeft:20,
    borderRadius:30
    },

   button2:{
     width:130,
    height:40,
    backgroundColor:"lightgreen",
    marginTop:-40,
    marginLeft:180,
    borderRadius:30
     },

      button3:{
     width:150,
    height:40,
    backgroundColor:"pink",
    marginTop:50,
    marginLeft:20,
    borderRadius:30
     },

 button4:{
     width:150,
    height:40,
    backgroundColor:"#f8e473",
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
    width:"80%",
    height:180,
    marginLeft:20
  },
  button5:{
    backgroundColor:'green',
    width:150,
    height:40,
    marginTop:20,
    alignself:'center',
    marginLeft:100,
    borderRadius:30
  },
  buttonText1:{
    fontSize:25,
    color:'white',
    alignItems:'center',
    alignSelf:'center',
    margineTop:10

  }
})