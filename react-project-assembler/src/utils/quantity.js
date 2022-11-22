export const quantity = (id) =>{
    const quantityArray =  JSON.parse(sessionStorage.getItem('shoppingCart')).filter(product =>product.id===id)
    return quantityArray[0].quantity
  }