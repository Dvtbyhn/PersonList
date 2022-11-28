import { createContext, useEffect, useState } from "react";

export const PersonContext = createContext();


const PersonContextProvider = (props) => {

    const [person, setPerson] = useState([
        { id: 1, fullName: "Davut Beyhan", tel: 5524242422, address: "Istanbul/Turkey", mail: "beyhandavut@gmail.com" },
        { id: 2, fullName: "James Bill", tel: 3456789344, address: "London/England", mail: "james223@gmail.com" },
        { id: 3, fullName: "Alex White", tel: 443566434, address: "Chicago/USA", mail: "alexwhite@gmail.com" },
        { id: 4, fullName: "Jolly Maec", tel: 5466452231, address: "Roma/Italy", mail: "jolly@gmail.com" },
        { id: 5, fullName: "Zeynep Taşçı", tel: 5524242422, address: "Istanbul/Turkey", mail: "zeyneptas@gmail.com" },
        { id: 6, fullName: "Alice Wonderful", tel: 3456789344, address: "London/England", mail: "@gmail.com" },
    ]) 
    
    useEffect(() => {
        localStorage.setItem("person", JSON.stringify(person))
    })

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("person"))
         setPerson(data)
    }, [])

    const delPerson = (id) => {
        const del = person.filter(item => item.id !== id)
        setPerson(del)
    }

    const addPerson = (fullName, tel, address, mail) => {
        setPerson([...person, { id: Math.random(), fullName, tel, address, mail }])
    }

    const editPerson = (id, updatedPerson) => {
        setPerson(person.map((item) => (item.id === id ? updatedPerson : item)))
    }

    return (
        <PersonContext.Provider value={{ person, delPerson, addPerson, editPerson, setPerson }}>
            {props.children}
        </PersonContext.Provider>

    )
}

export default PersonContextProvider