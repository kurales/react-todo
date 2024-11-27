import Todo from './Todo'

const TodoList = ({ tasks, deleteTask }) => {
  return (
    <ul className="todos__list">
      {tasks.map((task) => (
        <Todo key={task.id} {...task} deleteTask={deleteTask} />
      ))}
    </ul>
  )
}

export default TodoList
