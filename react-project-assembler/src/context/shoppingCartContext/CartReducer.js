import {existId} from './../../utils/index'

export const CartReducer = (state,action) => {
    switch (action.type){
        
        case 'add_product':
          
            if(state.length>0){

                if(existId(action.payload.id,state)){
                    state.map(product=>{
                        if(product.id===action.payload.id){
                                const action =product.quantity ++
                            return action
                        }
                        return null
                    })
                }else{
                   state.push({
                        ...action.payload,
                        quantity:1
                    })
                    return state
                }


            }else{
                
                state.push({
                    ...action.payload,
                    quantity:1
                })

                return state

            }
            sessionStorage.setItem('shoppingCart',JSON.stringify(state))
            return state
            
        case 'clean_cart':
            sessionStorage.removeItem('shoppingCart')

            return state = []

        case 'quit_product':  
            const newState=[...state]
            for(let i=0;i<newState.length;i++){
                if(newState[i].id === action.payload.id){

                    if(newState[i].quantity > 1){
          
                        newState[i].quantity--
                        sessionStorage.setItem('shoppingCart',JSON.stringify( newState))
            
                        return newState
                    }
                    else if(newState[i].quantity === 1){
            
                        const cart = newState.filter(product => product.id!==action.payload.id)
                        
                        sessionStorage.setItem('shoppingCart',JSON.stringify( cart))
                        return cart
        
                    }
                }
            }
            
            return newState
        default:
            return state
    }

}