import React from 'react';
import {useState,useEffect} from 'react'

const Todo = ({title, id, completed}) => {
    const [todoCompleted,setTodoCompleted] = useState(completed);

    useEffect(() => {

        if (todoCompleted === true){
            console.log(`Completed todo #${id} !`)
        } else {
            console.log(`Todo #${id} is yet to be completed !`);
        }
    },[todoCompleted])
    return (
        <div>
            {id + " " + title}
            <div className={todoCompleted ? "green" : "red"}
                onClick={() => {setTodoCompleted(!todoCompleted)}}>
            </div>
        </div>
    );
}

export default Todo;
