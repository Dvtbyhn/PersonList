import React, { useContext, useState } from 'react';
import { PersonContext } from '../../context/Context';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export default function Edit({ personel }) {

  const { editPerson } = useContext(PersonContext)
  const person = personel
  const id = person.id

  const [fullName, setFullName] = useState(person.fullName)
  const [tel, setTel] = useState(person.tel)
  const [mail, setMail] = useState(person.mail)
  const [address, setAddress] = useState(person.address)
  
  const updatedPerson = {id,fullName,tel,mail,address }

  const handleSubmit = (e) => {
    e.preventDefault()
    editPerson(id, updatedPerson)
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" >
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name='fullName'
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />

        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Tel No</Form.Label>
          <Form.Control
            type="text"
            name="tel"
            value={tel}
            onChange={(e) => setTel(e.target.value)}
          />

        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            name="mail"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />

        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Adress</Form.Label>
          <Form.Control
            type="text"
            name="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

        </Form.Group>
        
        <Button type="submit" style={{ width:"100%" }} variant="primary">
          Update
        </Button>
      </Form>

    </>
  )
}
