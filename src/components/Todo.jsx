import { useState } from 'react'
import { VscTrash } from 'react-icons/vsc'

const Todo = ({ id, text, isDone, deleteTask }) => {
  const [checked, setChecked] = useState(isDone)
  const checkedHandler = () => {
    setChecked(!checked)
    const storageData = JSON.parse(localStorage.getItem('data'))
    storageData.map((item) => {
      if (item.id == id) {
        item.isDone = !checked
        localStorage.setItem('data', JSON.stringify(storageData))
      }
    })
  }

  return (
    <li className="todos__item todo">
      <label>
        <input type="checkbox" onChange={checkedHandler} checked={checked} />
        <span className="todo__title">{text}</span>
      </label>
      <div className="todo__delete">
        <VscTrash onClick={() => deleteTask(id)} />
      </div>
    </li>
  )
}

export default Todo
