import React, { useContext, useEffect, useState } from 'react'
import Add from '../Add/Add';
import { PersonContext } from '../context/Context';
import Modal from 'react-bootstrap/Modal';
import Person from '../Person/Person';

import Alert from 'react-bootstrap/Alert';
import Pagination from '../Pagination';
import "./List.css"
import Header from '../Header/Header';

export default function List() {

    
    const [input, setInput] = useState("")
    const [show, setShow] = useState(false)
    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)
    const [alert, setAlert] = useState(false)
    const [delAlert, setDelAlert] = useState(false)
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5)


    const { person } = useContext(PersonContext)

    useEffect(() => {
        handleClose()

    }, [person])

    const addAlert = () => {
        setAlert(true)
        setTimeout(() => {
            setAlert(false)
        }, 3000)
    }

    const deleteAlert = () => {
        setDelAlert(true)
        setTimeout(() => {
            setDelAlert(false)
        }, 3000)
    }

    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = person.slice(indexOfFirstPost, indexOfLastPost)

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }



    return (
        <>
            <div >
           <Header input={input}  setInput={setInput}/>
                        {
                            alert === true ? <Alert variant='success' >
                                Contact added to the list
                            </Alert> : null
                        }
                        {
                            delAlert === true ? <Alert variant='danger' >
                                Person deleted from list
                            </Alert> : null
                        }

                    </div>
                  
                    <table className="table ">

                        <thead>
                            <tr>
                                <th scope="col">Name  </th>
                                <th scope="col">Tel No</th>
                                <th scope="col">Address </th>
                                <th scope="col">Mail</th>
                                <th><button onClick={handleShow}
                                    className='btn btn-success'>Add</button></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                currentPosts.filter(item => {
                                    return item.fullName.toLowerCase().indexOf(input.toLowerCase()) !== -1
                                }).map((person, i) => {
                                    return (
                                        <>
                                            <tr key={i}>
                                                <Person
                                                    person={person}
                                                    deleteAlert={deleteAlert}
                                                />
                                            </tr>
                                        </>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                 

                    <Pagination

                        person={person}
                        postsPerPage={postsPerPage}
                        totalPosts={person.length}
                        paginate={paginate}

                    />

                    <Modal show={show} onHide={handleClose} className="modal" >
                        <Modal.Header closeButton>
                        </Modal.Header>
                        <Modal.Body>
                            <Add addAlert={addAlert} />
                        </Modal.Body>
                    </Modal>



              
            
        </>
    )


}