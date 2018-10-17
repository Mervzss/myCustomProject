import {ADD_LOG,DELETE_LOG,PRESS_LOG,CLOSE_LOG} from './appActions'

export const addDataLog = (name, age) =>{
    return{
        type:ADD_LOG,
        personName:name,
        personAge:age
    }
}
export const deleteDataLog = () =>{
    return{
        type:DELETE_LOG,
    }
}
export const pressDataLog = pressedkey =>{
    return{
        type:PRESS_LOG,
        key:pressedkey
    }
}
export const closeDataLog = () =>{
    return{
        type:CLOSE_LOG
    }
}
