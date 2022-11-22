const existId= (id,state) =>{
    let exist = false
    state.map(product=>{
        if(product.id===id){
        return exist=true
        }
        return exist
    })
    return exist
}
export default existId