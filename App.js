/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,

  Image
} from 'react-native';

import StartInput from './Testing/MyInputs/StartInput'
import PersonList from './Testing/PersonList/PersonList'
import mainImage from "./assets/log.png";
import ModalView from './Testing/ModalView/ModalView'
import { connect } from "react-redux";
import { addDataLog,deleteDataLog,pressDataLog,closeDataLog } from "./ReduxFiles/Actions/actionIndex";
class App extends Component {

  onDelete = () =>{
    this.props.onDeleteData() 
  };
  executeAdd =(person, age)=>{
    this.props.onDataAdded(person)
  };
  itemPress = key => {
    this.props.onPressData(key)
  };
  closetheModal = () =>{
    this.props.onCloseData()
  };
  render() {
    return (
      <View style={styles.container}>
      <ModalView modalClose={this.closetheModal} selectedItem={this.props.selectedItem}
      deleteThis={this.onDelete} 
      />
      <Image style={styles.imageStyle} source={mainImage}/>
      <Text style={styles.textStyle}>LogIT App!</Text>
      <StartInput onDataAdded={this.executeAdd}/>
      <PersonList persons={this.props.personName} onPressList={this.itemPress}/>
      </View>
      
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  welcome: {
    fontSize: 50,
    textAlign: 'center',
    margin: 10,
  
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  textStyle:{
    fontWeight:"bold",
    fontSize: 16,
    color:"#000"
  },
  imageStyle:{
    width:30,
    height:30
  }
});
const dataProps = state =>
{
  return{
    personName: state.personData.personName,
  selectedItem: state.personData.selectedItem
  }
  
}
const dataAction = dispatch =>{
  return{
    onDataAdded: (person, age) => dispatch(addDataLog(person,age)),
    onDeleteData: ()=> dispatch(deleteDataLog()),
    onPressData: key => dispatch(pressDataLog(key)),
    onCloseData:()=> dispatch(closeDataLog())
  }
}
export default connect(dataProps,dataAction)(App);