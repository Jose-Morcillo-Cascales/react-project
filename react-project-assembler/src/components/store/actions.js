
export const pruebaFunction = (state,action) => {
    switch (action.type){
        case 'add_quantity':

            return action.payload
        case 'add_product':
          
            return action.payload
            
        case 'clean_cart':
            return action.payload

        case 'quit_product':  

            return action.payload

        default:
            console.log("default")
            return state
    }

}