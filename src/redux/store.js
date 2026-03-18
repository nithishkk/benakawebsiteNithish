import { createStore, combineReducers, applyMiddleware , compose} from 'redux';
import thunk from 'redux-thunk'
import {Home_reducer} from './Home'

const All_reducers = combineReducers({
    home: Home_reducer
});


const store = createStore(All_reducers, 
    compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    );

export default store;