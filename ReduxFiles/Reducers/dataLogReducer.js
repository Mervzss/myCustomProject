import {ADD_LOG,DELETE_LOG,PRESS_LOG,CLOSE_LOG} from '../Actions/appActions'

const initialState ={
    personName:[],
    selectedItem: null
}
        
 const reducer = (state = initialState,action) =>{
    switch(action.type){
        case ADD_LOG:
        return{
            ...state,
                personName: state.personName.concat({
                  key:Math.random(),
                  name: action.personName,
                  age: action.personAge,
                  image: { uri:"https://www.popsci.com/sites/popsci.com/files/styles/1000_1x_/public/images/2018/06/edinburgh_meadows_2008_middle_meadow_walk_by_catharine_ward_thompson.jpg?itok=ysmDaSjD&fc=50,50"

                  }
                })
            }
        case DELETE_LOG:
        return{
            ...state,
            personName: state.personName.filter(person =>{
                return person.key !== state.selectedItem.key
              }),
              selectedItem:null
        }
        case PRESS_LOG:
        return{
            ...state,
            selectedItem: state.personName.find(person =>{
                return person.key === action.key
              })
        }
        case CLOSE_LOG:
        return{
            ...state,
            selectedItem: null
        }
        default:
        return state;
 }
 }
 export default reducer;

     
