import React from 'react'
import { Form } from 'react-bootstrap';
export default function Header({ setInput, input }) {


    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <Form>
                <Form.Group className="mb-3" >
                    <h2 className='text-center mt-2' >Person Search</h2>
                    <Form.Control
                        style={{ width: "400px" }}
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                </Form.Group>
            </Form>
        </div>
    )
}
