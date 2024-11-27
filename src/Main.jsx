import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

const Main = () => {
  const [tasks, setTasks] = useState(() => {
    const savedData = localStorage.getItem('data')

    if (!savedData) {
      return []
    } else {
      return JSON.parse(savedData)
    }
  })

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(tasks))
  }, [tasks])

  const date = new Date().toLocaleDateString()

  const addTask = (text) => {
    setTasks([...tasks, { id: uuidv4(), text: text, isDone: false }])
  }

  const clearTaskList = () => {
    setTasks([])
    localStorage.removeItem('data')
  }

  const deleteTask = (id) => {
    return setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="todos">
      <h1 className="todos__header">My tasks</h1>
      <h4 className="todos__date">Today: {date}</h4>
      <TodoForm setTask={addTask} clearTaskList={clearTaskList} />
      {tasks.length == 0 && <h3>You have not tasks yet</h3>}
      {tasks.length > 0 && <TodoList tasks={tasks} deleteTask={deleteTask} />}
    </div>
  )
}

export default Main
