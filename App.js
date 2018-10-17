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
  Button,
  TextInput,
  Image
} from 'react-native';

import StartInput from './Testing/MyInputs/StartInput'
import PersonList from './Testing/PersonList/PersonList'
import mainImage from "./assets/log.png";
import faceImage from "./assets/face.png"
import ModalView from './Testing/ModalView/ModalView'

export default class App extends Component {
  state = {
      personName:[],
    frontImage: mainImage,
    selectedItem: null
  }
  onDelete = () =>{
    this.setState(prevState =>{
      return{
        personName: prevState.personName.filter(person =>{
          return person.key !== prevState.selectedItem.key
        }),
        selectedItem:null
      }

    })
    
  }

  executeAdd = (person,age) =>{
    this.setState(prevState =>{
      return{
        personName: prevState.personName.concat({
          key:Math.random(),
          name: person,
          age: age,
          image: faceImage
        }),
      }    
    });  
  }
  itemPress = key => {
    this.setState(prevState => {
      return{
      selectedItem: prevState.personName.find(person =>{
        return person.key === key
      })
    }
    })
  }
  closetheModal = () =>{
    this.setState({
      selectedItem: null
    })
  }
  render() {
    return (
      <View style={styles.container}>
      <ModalView modalClose={this.closetheModal} selectedItem={this.state.selectedItem}
      deleteThis={this.onDelete} 
      />
      <Image style={styles.imageStyle} source={this.state.frontImage}/>
      <Text style={styles.textStyle}>LogIT App!</Text>
      <StartInput onDataAdded={this.executeAdd}/>
      <PersonList persons={this.state.personName} onPressList={this.itemPress}/>
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
