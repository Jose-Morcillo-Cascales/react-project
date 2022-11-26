import {authTypes} from "./../"



export const authReducer = (state = {},action) =>{
    switch(action.type){
        case authTypes.login :
            return {
                ...state,
                isLogged:true,
                user: action.payload
            }
            case authTypes.logout :
            return {
                ...state,
                isLogged:true
            }
        default:
            return state
    }
}