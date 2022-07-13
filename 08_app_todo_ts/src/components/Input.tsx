import React from 'react'

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e : React.FormEvent) => void;
}

const Input = ({todo, setTodo, handleAdd} : Props) => {
  return (
    <div>
        <input 
        placeholder='Add todo'
        value={todo}
        onChange={e => setTodo(e.target.value)}/>
        <button onClick={handleAdd}>Add it</button>
    </div>
  )
}

export default Input;