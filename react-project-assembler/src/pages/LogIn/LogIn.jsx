import { useContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { usersConection } from '../../api/userApi';
import {AuthContext} from './../../context/authContext/AuthContext'


const LogIn = () => {
  const navigate = useNavigate()


  const [users,setUsers] = useState([])

  const [formState,setFormState] = useState({
    email:'',
    password:'',
  })
  const {
    email,
    password,
  } = formState

  const {login} = useContext(AuthContext)
  const url = "http://localhost:5000/users"

  useEffect(()=>{
    const conection = async () => {
      const data = await usersConection()
      setUsers(data)
    }
    conection()

   
  },[url])
  

  const onInputChange = ({target}) =>{
    const {name,value} = target
    setFormState({
      ...formState,
      [name]:value,
    })
  }

const onLogin = (e) =>{
  e.preventDefault()

  users.map(user =>{
    if(user.email===email){
          console.log(user)
          login(user)
    }
    return null
  })

  navigate("/", {
    replace: true,
  })
}


  return (
    <>
    <Link variant="primary" to = "/register">
        Register
    </Link>
    <Form onSubmit={onLogin}>
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
      
    </Form>
    </>
  );
}
//TODO Estilo
export default LogIn;