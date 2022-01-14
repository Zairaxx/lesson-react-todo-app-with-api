import React from 'react';
import {useState, useEffect} from 'react'
import Todo from "./Todo"

const TodoList = () => {
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/todos").then(response =>
        response.json()).then(json => setTodos(json));
    },[]);
    const [todos,setTodos] = useState([])
    return (
        <div>
            {todos.map((todo) => (<Todo 
                completed={todo.completed}
                id={todo.id}
                title={todo.title}
                key={todo.id}
             />))}
        </div>
    );
}

export default TodoList;
