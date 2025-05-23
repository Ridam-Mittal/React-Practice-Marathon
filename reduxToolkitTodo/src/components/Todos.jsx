import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, updateTodo } from '../features/todo/todoSlice'

function Todos() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
    const [editableTodo, setEditableTodo] = useState(null) // Track which todo is being edited

    return (
        <>
            <div>Todos</div>
            <ul className="list-none">
                {todos.map((todo) => (
                    <li
                        className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
                        key={todo.id}
                    >
                        {editableTodo === todo.id ? (
                            <input
                                value={todo.text}
                                onChange={(e) => dispatch(updateTodo({ id: todo.id, text: e.target.value }))}
                                className="bg-white text-black px-2 py-1 rounded"
                            />
                        ) : (
                            <div className="text-white">{todo.text}</div>
                        )}
                        
                        <button
                            onClick={() => setEditableTodo(editableTodo === todo.id ? null : todo.id)}
                            className="text-white bg-blue-500 border-0 py-1 px-4 focus:outline-none hover:bg-blue-600 rounded text-md"
                        >
                            {editableTodo === todo.id ? "Save" : "Edit"}
                        </button>

                        <button
                            onClick={() => dispatch(removeTodo(todo.id))}
                            className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
                        >
                            ❌
                        </button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Todos
