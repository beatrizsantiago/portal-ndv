import { LifeActionTypes }  from './life.types'

const INITIAL_STATE = {
    currentLife: ''
}

const lifeReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LifeActionTypes.SET_CURRENT_LIFE:
            return {
                ...state,
                currentLife: action.payload
            }
            
        default:
            return state
    }
}

export default lifeReducer