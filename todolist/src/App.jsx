
import { useState, useEffect } from 'react';
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todo, setTodo] = useState('');
  const [todolist, setTodolist] = useState(() => getlocalstorage());
  const [showcompleted, setShowcompleted] = useState(false);
  const [error, setError] = useState('');

  function getlocalstorage(){
    const data = localStorage.getItem('todolist');
    return data ? JSON.parse(data) : [];
  }

  useEffect(() => {
    // we can either use useeffect or setitem every place there is a change in todolist using the newtodolist variable directly

    // console.log('Writing to localStorage:', todolist);


    localStorage.setItem('todolist', JSON.stringify(todolist));
  }, [todolist]);

  function addtodo() {
    if (todo.trim().length < 4) {
      setError('Todo must be at least 4 characters long.');
      return;  // Don't proceed if error exists
    }

    if(todo.trim().length >= 45){
      return;  // Don't proceed if error exists
    }

    let index = todolist.findIndex((item) => item.todo === todo);
    if (index === -1) {
      setTodolist((prev) => [...prev, { id: uuidv4(), todo, complete: false }]);
      setTodo('');
      setError(''); // Reset error when todo is added successfully
    } else {
      setError('This todo already exists.');
    }
  }

  function handleChange(e) {
    const input = e.target.value;
    if (input.length >= 45) {
      setError('Todo content is getting too large (max 45 characters).');
    } else if (input.trim().length === 0) {
      setError('Todo cannot be empty.');
    } else {
      setError('');  // Reset error if everything is fine
    }
    setTodo(input);
  }

  function handleedit(itemid) {
    const item = todolist.find((item) => item.id === itemid);
    if (item) {
      setTodo(item.todo);
      setTodolist((prev) => prev.filter((item) => item.id !== itemid));
    }
  }

  function handledelete(itemid) {
    setTodolist((prev) => prev.filter((item) => item.id !== itemid));
  }

  function togglecompleted() {
    setShowcompleted((prev) => !prev);
  }

  function handlecheckbox(id) {
    setTodolist((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, complete: !item.complete } : item
      )
    );
  }

  return (
    <div>
      <div className="flex justify-center h-screen flex-col items-center">
        <div className="bg-indigo-700 w-[50vw] h-[90vh] shadow-xl rounded-xl">
          <div className="border p-2 border-black flex items-center flex-col bg-slate-800 text-white text-xl w-auto rounded-t-xl">
          To Do App
          </div>
          <div className="text-white w-auto flex flex-col px-8 py-3 gap-3">
            <h1 className="text-xl font-semibold">Add a Todo</h1>
            <div className="w-auto flex md:flex-row flex-col gap-4">
              <input
                className="px-1.5 md:w-[85%] w-[100%] py-1 rounded-md text-black outline-none"
                type="text"
                placeholder="Type something.."
                onChange={handleChange}
                value={todo}
              />
              <button
                className="md:py-2 py-1 border-white border rounded-lg px-5 bg-slate-800"
                onClick={addtodo}
                // disabled={todo.trim().length < 4 || todo.trim().length >= 45}
              >
                Save
              </button>
            </div>
            {error && (
              <div className="text-red-500 mt-2 font-semibold">{error}</div>
            )}
            <div className="w-auto flex flex-row gap-4 mt-4">
              <input
                id="show"
                type="checkbox"
                onChange={togglecompleted}
                checked={showcompleted}
              />
              <label htmlFor="show">Completed task</label>
            </div>
            <div className="h-[1px] bg-black opacity-15 w-[95%] mx-auto my-2"></div>
            <h2 className="text-2xl font-bold">Your Todos</h2>
            <div className='h-[48vh] overflow-auto pr-2 pl-1 '>
              {todolist.length === 0 ? (
                <div className="my-5 text-xl font-semibold">No Todos to display</div>
              ) : (
                todolist
                  .filter((item) => showcompleted || !item.complete)
                  .map((item) => (
                    <div
                      key={item.id}
                      className="flex flex-row my-3 justify-between items-center"
                    >
                      <div className="flex items-center gap-2 text-md font-semibold">
                        <input
                          type="checkbox"
                          id={item.id}
                          onChange={() => handlecheckbox(item.id)}
                          checked={item.complete}
                        />
                        <div className={item.complete?"line-through":""}>{item.todo}</div>
                      </div>
                      <div>
                        <button
                          className="md:py-2 py-1 border-white border rounded-lg px-5 bg-slate-800 mr-4"
                          onClick={() => handleedit(item.id)}
                        >
                          <FaEdit />
                        </button>
                        <button
                          className="md:py-2 py-1 border-white border rounded-lg px-5 bg-slate-800"
                          onClick={() => handledelete(item.id)}
                        >
                          <AiFillDelete />
                        </button>
                      </div>
                    </div>
                  ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
