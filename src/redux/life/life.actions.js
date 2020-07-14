import { LifeActionTypes }  from './life.types'

export const setCurrentLife = life => ({
    type: LifeActionTypes.SET_CURRENT_LIFE,
    payload: life
})