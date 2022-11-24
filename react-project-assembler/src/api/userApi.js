export const usersConection = async () =>{
    const url = "http://localhost:5000/users"
      try{
        const response =await fetch(url)
        const data = await response.json()
        return data
      }
      catch(err){
        <h1>{err}</h1>
      }
  }

  export const addNewUser = async (newUser) => {

    try {
      const url = 'http://localhost:5000/users';
      const options = {
        method: 'POST',
        headers: { 'Content-type': 'application/json; charset=utf-8' },
        body: JSON.stringify(newUser),
      };
      const response = await fetch(url, options)
      
    } catch (error) {
      return error
    }
  };