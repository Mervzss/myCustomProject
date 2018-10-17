import React from 'react'
import {Modal,Text,View,Image,Button,StyleSheet} from 'react-native'
state ={
    modal: false
}


const modalView = props => {
    let modaladd = null;
if(props.selectedItem){
    modaladd = (
        <View style={styles.viewdesign}>
        <Image resizeMode="contain" style={styles.imageStyle} source={props.selectedItem.image}/>
        <View style={styles.inTextDesign}>
        <Text style={styles.personTextDesign}>Name: {props.selectedItem.name}</Text>
        <Text style={styles.personTextDesign}>Age: {props.selectedItem.age}</Text>
        </View>
        
        </View>
    );
}
return(
    <Modal onRequestClose={props.modalClose} visible={props.selectedItem !== null} animationType="fade"
     >
        <View style={styles.contain}>
            {modaladd}
            <Text style={styles.textDesign}>LogIT Info</Text>
            
            <View>
                <Button title="Delete" color="#ff3a4e" onPress={props.deleteThis}/>
                <Button title="Close" color="#39d1ff" onPress={props.modalClose}/>
            </View>
        </View>
    </Modal>
)
}
const styles = StyleSheet.create({
    viewdesign:{
        width: "100%",
        flexDirection:"row",
        justifyContent:"space-between",
        padding:10
    },
    inTextDesign:{
        width:"60%",
        flexDirection:"column"
    },
    imageStyle:{
        width:"40%",
        height:120,
        paddingLeft:10,
        paddingRight:5
        
    },
    textDesign:{
        textAlign:"center",
        fontSize:20,
        fontWeight:"bold"
        
    },
    personTextDesign:{
        fontSize:20,
        fontWeight:"bold",
        marginTop:15
    },
    contain:{
        width: "100%",
        justifyContent:"center",
        paddingTop:100
    
    }
})
export default modalView;