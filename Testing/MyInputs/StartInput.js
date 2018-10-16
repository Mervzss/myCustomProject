import React, {Component} from 'react';
import { TextInput,Button,View,StyleSheet,Text } from "react-native";


class Startinput extends Component{
    state = {
        personName:"",
        personAge:"",
        buttonColor:"blue"
        };
        updatedTextName = val =>{
            this.setState({
                personName:val
            });
        }
        updatedAge = val =>{
            this.setState({
                personAge:val
            })
        }
        onEnter = () => {
            this.setState(prevState => {
                return{
                    buttonColor: prevState.buttonColor === "blue" ? "red":"blue"
                }
            });
        //   alert(this.state.personAge);
           if (this.state.personName.trim() === "" || typeof(parseInt(this.state.personAge)) === isNaN ){
           alert(parseInt(this.state.personAge));
            return;
          }
                      
          this.props.onDataAdded(this.state.personName,this.state.personAge);
        };
    render(){
        return(
            <View style={style.Contain}>
                <View style={style.inputContainer}>
                <TextInput  style={style.textInputStyle} placeholder="Enter Name" onChangeText={this.updatedTextName}
                value={this.state.personName}/>
            </View>
            <View style={style.inputContainer}>
                <TextInput keyboardType="numeric" style={style.textInputStyle} placeholder="Enter Age" onChangeText={this.updatedAge}/>
             </View>
             <View style={style.buttonStyle}>
                <Button title="Enter" color={this.state.buttonColor} onPress={this.onEnter}/>
             </View>
            </View>
            
        );
    }
}

const style = StyleSheet.create({
textInputStyle:{
    width:'100%'
},
buttonStyle:{
    width:'100%'
},
inputContainer:{
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  Contain:{
    width: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center"
  }
});
export default Startinput;