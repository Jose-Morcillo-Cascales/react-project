import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { usersConection } from '../../api/userApi';

const LogIn = () => {
  const [users,setUsers] = useState([])
  
  
  const url = "http://localhost:5000/users"

  useEffect(()=>{
    const conection = async () => {
      const data = await usersConection()
      setUsers(data)
    }
    conection()

   
  },[url])

  const [formState,setFormState] = useState({
    email:'',
    password:'',
  })

  const {
    email,
    password,
  } = formState

  const onInputChange = ({target}) =>{
    const {name,value} = target
    setFormState({
      ...formState,
      [name]:value,
    })
  }


  // const onSubmit = (e) =>{
  //   e.preventDefault()

  //   if( email === '' ||
  //   password === '' 
  
  //   ){
  //       return console.warn("rellena cariño");
  //   }else if(users.find(user=>user.email===email)){
  //      return console.warn("email ocupado cariño")
  //   }

  //   const Login = {
  //     email,
  //     password,
  //   }
  
  // }

  return (
    <Form>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email address</Form.Label>
         <Form.Control type="email" placeholder="Enter email" name="email" value={email} onChange={onInputChange}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name="password" value={password} onChange={onInputChange}/>
      </Form.Group>
     
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <Link variant="primary" type="submit">
        Register
      </Link>
    </Form>
  );
}
//TODO Estilo
export default LogIn;