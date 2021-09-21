import * as React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert, Button} from 'react-native';
import Header from '../components/Header';

export default class Question1 extends React.Component{
  nextScreen =()=>{
    this.props.navigation.navigate('Question2');
  }
   displayAlert() {
    alert('Your answer is correct');
  }
  displayAlert1() {
    alert('Better luck next time');
  }
  render(){
    return(
      <View>
      <Header/>
      <Text style = {styles.text}>
     (1) which is the biggest building in the world
      </Text>
      <TouchableOpacity style={styles.button}onPress={this.displayAlert1}>
      <Text style={styles.buttonText}>a. Taj Mahal</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button2}onPress={this.displayAlert}>
      <Text style={styles.buttonText}>b. Burj Khalifa</Text>
     
      </TouchableOpacity>
       <TouchableOpacity style={styles.button3}onPress={this.displayAlert1}>
      <Text style={styles.buttonText}>c. Hawa Mahal</Text>
      </TouchableOpacity>
       <TouchableOpacity style={styles.button4}onPress={this.displayAlert1}>
      <Text style={styles.buttonText}>d. Eiffel Tower</Text>
      </TouchableOpacity>
      <TouchableOpacity style = {styles.button5}
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
    marginTop: 30,
    color: 'green',
    fontSize: 20,
  },
  button:{
     width:130,
    height:40,
    backgroundColor:"lightgreen",
    marginTop:120,
    marginLeft:20,
    borderRadius:30
    },

   button2:{
     width:130,
    height:40,
    backgroundColor:"yellow",
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
    backgroundColor:"silver",
    marginTop:-38,
    marginLeft:180,
    borderRadius:30
     },

  buttonText:{
    fontSize:20,
    color:'purple',
    alignItems:'center',
    alignSelf:'center',
    margineTop:10
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