import {useState} from 'react'
import AddTodo from './AddTodo'
import TaskList from './TaskList'

let nextId = 3;
const initialTodos = [
    {id: 0, title: 'Buy milk', done: true},
    {id: 1, title: 'Eat tacos', done: false},
    {id:2, title: 'Brew tea', doen: false},
]

export default function TaskApp(){
    const [todos, setTodos] = useState(initialTodos)


    function handleAddTodo(title){
        if(title !== ''){
            setTodos([...todos,{
                id: nextId++,
                title: title,
                done: false,
            }])
        }
    }

    function handleChangeTodo(nextTodo){
        setTodos(todos.map(x => {
            if(x.id === nextTodo.id){
                return nextTodo
            } else {
                return x
            }
        }))
    }

    function handleDeleteTodo(todoid){
        setTodos(todos.filter(x => 
            x.id !== todoid
        ))
    }

    return(
        <>
            <AddTodo onAddTodo = {handleAddTodo}/>
            <TaskList 
                todos={todos}
                onChangeTodo={handleChangeTodo}
                onDeleteTodo={handleDeleteTodo}
            />
        </>
    )
}