import { combineReducers } from 'redux'

import navigationReducer from './navigation/navigation.reducer'
import lifeReducer from './life/life.reducer'

export default combineReducers({
    navigation: navigationReducer,
    life: lifeReducer
})