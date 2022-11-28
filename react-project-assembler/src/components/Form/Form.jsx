import{ useContext } from 'react'
import { Container, ListGroup, Row } from 'react-bootstrap'
import { AuthContext } from '../../context/authContext/AuthContext'
//TODO hacer form entero!!
const Form = () => {
  const {user} = useContext(AuthContext)
  
  console.log(user)
  return (
   <>
    <Container>
    <ListGroup>
      <ListGroup.Item>Name: {user?.name}</ListGroup.Item>
      <ListGroup.Item>Surame: {user?.surname}</ListGroup.Item>
      <ListGroup.Item>Email: {user?.email}</ListGroup.Item>
      <ListGroup.Item>Phone: {user?.phone}</ListGroup.Item>
      <ListGroup.Item>Address: {user?.address}</ListGroup.Item>
      <ListGroup.Item>PostalCode: {user?.postalCode}</ListGroup.Item>

    </ListGroup>
      

    </Container>
   </>
     
  )
}

export default Form