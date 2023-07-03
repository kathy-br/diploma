import { createStore } from 'redux';
import { Provider } from 'react-redux';


const defaultState = {
    details : []
}

const reducer  = (state = defaultState, action) => {
    switch(action.type){
      case "DETAILS_FILM": 
        return {...state, details:[action.payload]}
      default:
        return state
    }
  }


 const store = createStore(reducer)
export default store 