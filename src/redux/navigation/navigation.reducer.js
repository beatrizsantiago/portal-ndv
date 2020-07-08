import { NavigationActionTypes }  from './navigation.types'

const INITIAL_STATE = {
    currentNavigation: 'home'
}

const navigationReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case NavigationActionTypes.SET_CURRENT_NAVIGATION:
            return {
                ...state,
                currentNavigation: action.payload
            }
            
        default:
            return state
    }
}

export default navigationReducer