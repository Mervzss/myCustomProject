import React from 'react';
import {Text, View,StyleSheet,FlatList} from "react-native";

import BaseList from '../BaseList/BaseList'

const PersonList = props => {
    return(
         <FlatList 
         style={styles.container}
        data={props.persons}
        renderItem={({item}, index)=>{
           return <BaseList      
        persons={item.name}
        Age={item.age}
        faceImage={item.image}
        pressList ={()=> props.onPressList(item.key)}
        />
        }}/>)
    // const personDataOutput = props.persons.map((data,i) =>(
    //     <BaseList
    //     persons={data}
    //     Age={props.Age[i]}
    //     key = {i}
    //     />
        
    // ));
    // return (<View style={styles.container}>{personDataOutput}
    // </View>)

}
const styles = StyleSheet.create({
    container:{
        width:"100%"
    },
    styleView:{
        flexDirection:"row"
    }
})
    

export default PersonList;