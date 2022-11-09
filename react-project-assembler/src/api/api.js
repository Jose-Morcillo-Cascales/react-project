
  export const apiConection = async (url) =>{
     
      try{
        const response =await fetch(url)
        const data = await response.json()
        console.log(data,"patata")
        return data
      }
      catch(err){
        <h1>{err}</h1>
      }

      
  }


   



