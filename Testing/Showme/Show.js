import React,{Component} from "react";
import { Text,View } from "react-native";

class Show extends Component  {
render() {
    return (
      <View>
        <Text>Hello {this.props.jaguar} {this.props.chicken}!</Text>
      </View>
      
    );
  }
}
export default Show;