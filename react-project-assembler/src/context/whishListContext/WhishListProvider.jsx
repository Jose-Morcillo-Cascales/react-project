import { useReducer } from "react"
import existId from "../../utils/cartExistId"
import { wishTypes } from "../Types/Types"
import { WhishListContext } from "./WhishListContext"
import { WhishReducer } from "./WhishListReducer"

const WhishListProvider = ({children}) => {

  const init = _ => {
   return JSON.parse(sessionStorage.getItem('wishCart')) ?? []

  }

  const [whishCart,dispatchWhish] = useReducer(WhishReducer,[],init)

  const addWish = (id,name,img,price) => {
      console.log(whishCart)
    if(!existId(id,whishCart)){
      console.log("patata")

      whishCart.push({id,name,img,price})
      dispatchWhish({type: wishTypes.add,
      payload: whishCart})
      return sessionStorage.setItem('wishCart',JSON.stringify(whishCart))
    }
  }

  const quitWhish = (id) =>{

    const filterWhish = whishCart.filter(product=>product.id!==id)
    console.log(filterWhish)

    dispatchWhish({
      type: wishTypes.add,
      payload: filterWhish
    })

    return sessionStorage.setItem('wishCart',JSON.stringify(filterWhish))
  }
  const cleanWhish = _ =>{
    sessionStorage.setItem('wishCart',JSON.stringify([]))
    dispatchWhish({action:wishTypes.clean})
 }
  return (
   <WhishListContext.Provider value={{whishCart,cleanWhish,quitWhish,addWish}}>
    {children}
   </WhishListContext.Provider>
   

  )
}

export default WhishListProvider