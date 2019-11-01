import React, { useState, useEffect } from "react"
import "./style.scss"
import Card from "../../components/Card";

function Home(props) {

    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch("https://reqres.in/api/users").then(res => res.json()).then(res => {
            setUsers(res.data)
        })
    }, [])



    return (
        <div className="title">
        <p>{props.title}</p>
        <div className="container">
           
            {users.map(user => {
                return <Card 
                            key={user.id}
                            first_name={user.first_name} 
                            avatar={user.avatar} 
                            last_name={user.last_name} 
                            email={user.email}
                        />
            })}
        </div>
        </div>
    )
}

export default Home