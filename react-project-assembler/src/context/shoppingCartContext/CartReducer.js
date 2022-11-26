import { shoppingTypes } from '../Types/Types'

export const CartReducer = (state,action) => {
    switch (action.type){
        
        case shoppingTypes.add:
          
            return action.payload
            
        case shoppingTypes.clean:

            return state = []

        case shoppingTypes.quit:  
          
            return action.payload
        default:
            return state
    }

}