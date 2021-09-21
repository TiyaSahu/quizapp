import * as React from 'react';
import {View} from 'react-native';
import HomeScreen from './screens/HomeScreen';
import Question1 from './screens/Question1';
import Question2 from './screens/Question2';
import Question3 from './screens/Question3';
import Question4 from './screens/Question4';
import FinishScreen from './screens/FinishScreen';
import { createAppContainer, createSwitchNavigator} from 'react-navigation'; 

export default class App extends React.Component{
  render(){
    return(
      <View>
      <AppContainer/>
      </View>
      
    )
  }
}

var AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  Question1: Question1,
  Question2: Question2,
  Question3: Question3,
  Question4: Question4,
  FinishScreen:FinishScreen
})

const AppContainer = createAppContainer(AppNavigator);