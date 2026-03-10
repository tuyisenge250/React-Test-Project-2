import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faTrash } from '@fortawesome/free-solid-svg-icons';
import type { TodoTpye } from '../App';

interface todoProp {
    id: string
    todo: TodoTpye
    handleChecking: (id: number) => void
    handleDelete: (id: number) => void
}

function Todo({id,todo,handleChecking, handleDelete}: todoProp) {
  return (
    <div className='flex justify-between mx-10 py-2 border-b-2 border-gray-400 mb-2'>
      <div className='flex gap-1'>
        <input type="checkbox" name="display" id="" onChange={() => handleChecking(id)}/>
        <p className={`${todo.checked && "line-through"}`}>{todo.name}</p>
      </div>
      <button onClick={() => handleDelete(id)}>
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  )
}

export default Todo
