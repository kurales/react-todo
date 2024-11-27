import { useState } from 'react'
import { IoMdAddCircle } from 'react-icons/io'
import { IoRemoveCircle } from 'react-icons/io5'

const TodoForm = ({ setTask, clearTaskList }) => {
  const [input, setInput] = useState('')

  const onSubmitHandler = (e) => {
    e.preventDefault()
    if (input) {
      setTask(input)
      setInput('')
    }
  }

  return (
    <>
      <form className="todos__form" onSubmit={onSubmitHandler}>
        <input
          type="text"
          placeholder="Enter your new task here..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <div className="todo__actions">
          <button type="submit" title="Add task">
            <IoMdAddCircle />
          </button>
          <button onClick={clearTaskList} title="Clear list">
            <IoRemoveCircle />
          </button>
        </div>
      </form>
    </>
  )
}

export default TodoForm
