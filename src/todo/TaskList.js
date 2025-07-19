import { useState } from "react";

export default function TaskList({ todos, onChangeTodo, onDeleteTodo }) {
  return (
    <>
      {todos.length > 0 && (
        <ul className="todo-ul">
          {todos.map((todo) => (
            <li key={todo.id} className="todo-li">
              <Task
                todo={todo}
                onChange={onChangeTodo}
                onDelete={onDeleteTodo}
              />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

function Task({ todo, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [todoTitle, setTodoTitle] = useState(todo.title);

  let todoContent;
  if (isEditing) {
    todoContent = (
      <>
        <input
          value={todoTitle}
          className="todo-edit-input"
          onChange={(e) => {
            setTodoTitle(e.target.value);
          }}
        />
        {/* <button onClick={() => setIsEditing(false)} className='todo-save'>save</button> */}
      </>
    );
  } else {
    todoContent = (
      <>
        {todo.title}
        {/* <button onClick={() => setIsEditing(true)} className='todo-edit'>Edit</button> */}
      </>
    );
  }

  const onSaveChangeClick = () => {
    onChange({ ...todo, title: todoTitle });
    setIsEditing(false);
  };

  return (
    <div className="todo-items-list">
      <label className="todo-items-label">
        {/* <input 
                type="checkbox"
                checked={todo.done}
                onChange={e => {
                    onChange({
                        ...todo,
                        done: e.target.checked
                    })
                }}
            /> */}
        <h3 className="todo-item-name">{todoContent}</h3>
      </label>
      <div className="todo-buttons">
        {isEditing ? (
          <button onClick={onSaveChangeClick} className="todo-save">
            Save
          </button>
        ) : (
          <button onClick={() => setIsEditing(true)} className="todo-edit">
            Edit
          </button>
        )}

        <button onClick={() => onDelete(todo.id)} className="todo-delete">
          Delete
        </button>
      </div>
    </div>
  );
}
