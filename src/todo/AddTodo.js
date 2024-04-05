import {useState} from 'react'

export default function AddTodo({onAddTodo}){
    const [title, setTitle] = useState('');
    return(
        <div className='todo-add-container'>
            <input 
            placeholder="Add Todo"
            value = {title}
            className='todo-add-input'
            onChange={e => setTitle(e.target.value)} />
            <button className='todo-add-button' onClick ={() => {
                onAddTodo(title);
                setTitle('');
            }}>Add</button>
        </div>
    )
}