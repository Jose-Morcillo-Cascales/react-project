import { useState,useEffect } from "react"
import { Form ,Button} from "react-bootstrap"
import { usersConection,addNewUser } from "../../api/userApi"

const Register = () => {
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
    name:'',
    surname:'',
    phone:'',
    address:'',
    postalCode:'',

  })
  const {
    email,
    password,
    name,
    surname,
    phone,
    address,
    postalCode

  } = formState
  
  const onInputChange = ({target}) =>{
    const {name,value} = target
    setFormState({
      ...formState,
      [name]:value,
    })
  }
  console.log(formState)
  const onSubmit = (e) =>{
    e.preventDefault()

    if( email === '' ||
    password === '' ||
    name === '' ||
    surname=== '' ||
    phone=== '' ||
    address=== '' ||
    postalCode=== '' 
    ){
        return console.warn("rellena cariño");
    }else if(users.find(user=>user.email===email)){
       return console.warn("email ocupado cariño")
    }

    const newUser = {
      email,
      password,
      name,
      surname,
      phone,
      address,
      postalCode
    }
    addNewUser(newUser)
  }

  return (
    <Form onSubmit={onSubmit}>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="email" value={email} onChange={onInputChange}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name="password" value={password} onChange={onInputChange}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Name" name="name" value={name} onChange={onInputChange}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="surname">
        <Form.Label>Surname</Form.Label>
        <Form.Control type="text" placeholder="Surname" name="surname" value={surname} onChange={onInputChange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="phone">
        <Form.Label>Telephone</Form.Label>
        <Form.Control type="tel" placeholder="Telephone" name="phone" value={phone} onChange={onInputChange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="address">
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" placeholder="Address" name="address" value={address} onChange={onInputChange}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="postalCode">
        <Form.Label>Postal Code</Form.Label>
        <Form.Control type="text" placeholder="Postal Code" name="postalCode" value={postalCode} onChange={onInputChange}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default Register