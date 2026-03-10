import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { useState, useRef } from 'react';
import Todo from './component/Todo';

export interface TodoTpye {
  name : string
  isDeleted: boolean
  checked: boolean
}

export default function App() {
  const [inputValue,setInputValue] = useState<string>("")
  const [todos, setTodos] = useState<TodoTpye[]>([{name: "python programming Language is better js", isDeleted: false, checked: false}])
  const [error, setError] = useState<string>("")

  const handleChecking = (id: number) => {
    setTodos(prev => prev.map((todo, i) => id === i ? {...todo, checked: !todo.checked} : todo))
  } 
  const handleDelete = (id: number) => {
    setTodos(prev => prev.filter((_,i) => i !== id))
  }
  const handleInput = (e) => {
    const value = e.target.value
    setInputValue(value)
  }
  const handleAddTodos = () =>{
    if(inputValue.length < 5){
      setError("todo must great than 5")
      return
    }
    setError("")
    setTodos(prev => [...prev, {name: inputValue, isDeleted: false, checked: false}])
    setInputValue("")
  }
  const todosRender = todos.filter(todo => !todo.isDeleted).map((todo,id) => <Todo id={id} todo={todo} handleChecking={handleChecking} handleDelete={handleDelete} key={id}/>)

  return (
    <>
     <div className="w-[60%] mx-auto border-2 bg-blue-300 mt-10 border-gray-50 rounded-2xl h-[80vh] pt-8 flex flex-col pb-10">
       <h1 className="text-6xl font-bold text-gray-400 text-center">
        Todos
       </h1>
       <div className='mx-10 bg-white py-4 px-6 shadow-xl mt-20 rounded-3xl flex justify-between items-center gap-4'>
        <input type="text" 
           placeholder='add items' 
           className="font-bold border-0 ring-0 focus:ring-0  flex-1 outline-0"
           onChange={handleInput}
           value={inputValue}
          />
        <button onClick={handleAddTodos}>
          <FontAwesomeIcon icon={faCirclePlus} width={32} height={32} className='w-24'/>
        </button>
       </div>
       {error && <p className='text-red-500 text-center font-semibold pt-2'>{error}</p>}
       <div className="flex flex-1 justify-end flex-col">
        {todosRender}
       </div>
     </div>
    </>

  );
}