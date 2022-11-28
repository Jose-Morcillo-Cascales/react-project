import {wishTypes} from '../Types/Types'

export const WhishReducer = (state,action) => {

    switch(action.type) {

        case wishTypes.add:

            return action.payload

        case wishTypes.quit:

            return action.payload
        
        case wishTypes.clean:
            state = [] 
                return state
         default:
            return state   
    }
}