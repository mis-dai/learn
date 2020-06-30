import {createStore} from 'redux';
import reducer from './reducer'
// import { ITEM_ADD } from './actionType'

const store = createStore(reducer)
export default store