import axios from 'axios'
import React from 'react'

export default function Todo(props) {
    const deleteTodoHandler = (title) => {
        axios.delete(`http://localhost:8001/api/todo/${title}`)
            .then(res => console.log(res))
    }
    return (
        <div style={{ display: "flex", justifyContent: 'center' }}>
            <div style={{ width: "500px" }}>
                <p><span style={{ fontWeight: 'bold' }}>{props.todo.title}:</span> {props.todo.description} <button onClick={() => deleteTodoHandler(props.todo.title)} style={{ color: 'red' }}>Delete</button></p>
            </div>
        </div>
    )
}
