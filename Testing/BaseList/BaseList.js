import React, {Component} from 'react';
import { View,Text,StyleSheet,Image,TouchableHighlight } from "react-native";

const BaseList = props =>(
    <TouchableHighlight onPress={props.pressList} underlayColor="#ff4c9c">
     <View style={styles.containerStyle}>
    <View>
    <Image resizeMode="cover" style={styles.imageStyle} source={props.faceImage}/>
    </View>
    <View>
    <Text>  Name:  {props.persons}     </Text>
    </View>
    <View>
    <Text> Age: {props.Age}</Text>
    </View>
    
    </View>
    </TouchableHighlight>
    
);

const styles = StyleSheet.create({
    containerStyle:{
        width:"100%",
        backgroundColor:"#dbfff7",
        padding:10,
        flexDirection: "row",
        // justifyContent="space-between",
        marginBottom: 5
    },
    imageStyle:{
        marginRight:8,
        width:25,
        height:25
    }

})
export default BaseList;