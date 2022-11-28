import React, { useState, useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { PersonContext } from '../../context/Context';


export default function Add({ addAlert }) {

  const { addPerson } = useContext(PersonContext)

  const [newPerson, setNewPerson] = useState({
    fullName: "", tel: "", address: "", mail: ""
  })

  const { fullName, tel, address, mail } = newPerson

  const onInputChange = (e) => { setNewPerson({ ...newPerson, [e.target.name]: e.target.value }) }

  const handleSubmit = (e) => {
    e.preventDefault()
    addPerson(fullName, tel, address, mail)
    addAlert()
  }


  return (
    <>

      <Form onSubmit={handleSubmit} className="form">

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            type="text"
            name='fullName'
            value={fullName}
            onChange={(e) => onInputChange(e)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Tel No</Form.Label>
          <Form.Control
            required
            type="text"
            name="tel"
            value={tel}
            onChange={(e) => onInputChange(e)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="name@example.com"
            name="mail"
            onChange={(e) => onInputChange(e)}
            value={mail}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Adress</Form.Label>
          <Form.Control
            required
            type="text"
            name="address"
            onChange={(e) => onInputChange(e)}
            value={address}
          />
        </Form.Group>

        <Button type="submit" style={{ backgroundColor: "green", width: "100%" }} variant="primary">
          Add
        </Button>
      </Form>
    </>


  )
}


