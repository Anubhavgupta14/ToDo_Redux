import React from 'react'
import { UseSelector, useDispatch, useSelector } from 'react-redux'
import { removeTodo, editTodo } from '../features/todo/todoSlice'

const Todo = () => {
    const todos = useSelector(state=> state.todos)
    const dispatch = useDispatch()

    const handleEdit = (id, updatedText) => {
      dispatch(editTodo({ id, updatedText }));
    };
  return (
    <>
    <ul className='list-none'>
    {todos.map((todo)=>(
        <li className='mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded'
         key={todo.id}>
            <div className='text-white'>{todo.text}</div>
            <div style={{display:'flex',gap:'2vh'}}>
            <button
              className='text-white bg-blue-500 border-0 py-1 px-4 focus:outline-none hover:bg-blue-600 rounded text-md'
              onClick={() => {
                const updatedText = prompt('Enter the updated todo:', todo.text);
                if (updatedText !== null) {
                  handleEdit(todo.id, updatedText);
                }
              }}
            >
              Edit
            </button>
            <button className='text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md'
            onClick={()=>dispatch(removeTodo(todo.id))}
            >X</button>
            </div>
        </li>
    ))}
    </ul>
    </>
  )
}

export default Todo