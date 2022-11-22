
  export const apiConection = async () =>{
    const url = "http://localhost:5000/products"
      try{
        const response =await fetch(url)
        const data = await response.json()
        return data
      }
      catch(err){
        <h1>{err}</h1>
      }

      
  }


   



