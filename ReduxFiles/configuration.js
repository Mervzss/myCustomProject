import {createStore,combineReducers} from 'redux'
import DataLogReducers from './Reducers/dataLogReducer'

const rootReducer = combineReducers(
    {
        personData: DataLogReducers
    }
)
const configureStore = ()=>{
    return createStore(rootReducer);
}
export default configureStore;