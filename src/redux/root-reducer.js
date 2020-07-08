import { combineReducers } from 'redux'

import navigationReducer from './navigation/navigation.reducer'

export default combineReducers({
    navigation: navigationReducer
})