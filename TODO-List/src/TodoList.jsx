import {useState} from 'react'
import {v4 as uuidv4} from 'uuid';
import './Todo.css'

export default function TodoList() {
    let[todos, setTodos] = useState([{task: "sample task", id: uuidv4(), isDone: false}]);
    let [newTodo, setNewTodo] = useState("");   
    let addNewTask = () => {
    setTodos((prevTodos) => {
        return [...prevTodos, { task: newTodo, id: uuidv4(), isDone: false }];
    });
    setNewTodo("");
};
    let updateTodoVlaue = (event) => {
        setNewTodo(event.target.value);
    };
    let deleteTask = (id) => {
        setTodos((prevTodos) => {
            return prevTodos.filter((todo) => todo.id !== id);
        });
    };
    let UpperCaseAll = () => {
    setTodos((prevTodos) => {
        return prevTodos.map((todo) => {
            return { ...todo, task: todo.task.toUpperCase() };
        });
    });
};

let UpperCaseOne = (id) => {
    setTodos((prevTodos) => {
        return prevTodos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, task: todo.task.toUpperCase() };
            } else {
                return todo;
            }
        });
    });
};
let DoneTodo = (id) => {
    setTodos((prevTodos) =>
        prevTodos.map((todo) =>{
           if(todo.id ==id){
            return { ...todo, isDone: true };
           }else{
            return todo;
           }
        
      } ));
};

    return (
        <>
        <div id='add'>
<input placeholder="add a Task" value={newTodo} onChange={updateTodoVlaue}></input>
            <button onClick={addNewTask}>Add Task </button>
            <br /><br />
        </div>
        
            
            <h1>Todo tasks</h1>
            <ul>
                {todos.map((todo) => (
                        <li key={todo.id}>
                            <span style={{ textDecoration: todo.isDone ? "line-through" : "none" }}>
    {todo.task}
</span>
                            &nbsp;&nbsp;
                            <button onClick={()=>deleteTask(todo.id)}>Delete</button>&nbsp;&nbsp;
                            <button onClick={()=>UpperCaseOne(todo.id)}>Convert to Uppercase</button> &nbsp;&nbsp;
                            <button onClick={()=>DoneTodo(todo.id)}>Mark as Done</button>

                            </li>

                    ))}
            </ul>
            <br /><br />
            <div>
<button onClick={UpperCaseAll}>Convert to Uppercase</button>
            </div>
            

        </>
    );
}