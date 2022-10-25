import React, { useContext, useEffect, useState } from 'react'
import { PersonContext } from '../context/Context'
import Edit from "../Edit/Edit"
import { ModalTitle } from "react-bootstrap"
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import "./Person.css"
export default function Person({ person ,deleteAlert}) {


    const [show, setShow] = useState(false)

    const handleShow = () => setShow(true)

    const handleClose = () => setShow(false)
   


    useEffect(() => {
        handleClose()
        
    }, [person])



    const { delPerson } = useContext(PersonContext)

    return (
        <>
       
            <td>{person.fullName} </td>
            <td>{person.tel} </td>
            <td>{person.address} </td>
            <td>{person.mail} </td>
            <button
                  className='delete'
                onClick={() => deleteAlert(delPerson(person.id)) }
                style={{
                    backgroundColor: "red", border: "none",
                    color: "white", marginRight: "5px",
                }}>Delete</button>
            <button className='edit' onClick={handleShow} style={{
                backgroundColor: "blue",marginRight: "5px",
                border: "none", color: "white"
            }} >Edit</button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <ModalTitle>
                        Edit Employee
                    </ModalTitle>
                </Modal.Header>
                <Modal.Body>
                    <Edit personel={person} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )


}
