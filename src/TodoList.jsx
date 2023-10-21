import { TodoItem } from "./TodoItem"

export function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul className="list">
        {/* Code inside {} runs as JS code  */}
      {todos.length === 0 && "No Todos"} 
      {/* the line above returns "NO todos" if length === 0 */}
      {todos.map(todo => {
        return (
          <TodoItem
            {...todo} // passes all the props of the todo item (i.e. title, completed)
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        )
      })}
    </ul>
  )
}
