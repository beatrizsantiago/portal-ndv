import { NavigationActionTypes }  from './navigation.types'

export const setCurrentNavigation = navigation => ({
    type: NavigationActionTypes.SET_CURRENT_NAVIGATION,
    payload: navigation
})