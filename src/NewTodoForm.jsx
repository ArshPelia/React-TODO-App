import { useState } from "react"

// onSubmit value is passed from the prop set in app.jsx
export function NewTodoForm({ onSubmit }) {
  const [newItem, setNewItem] = useState("")

  function handleSubmit(e) {
    // preventDefault is called on the event when submitting the form to prevent
    // a browser reload/refresh. 
    e.preventDefault()

    if (newItem === "") return

    // call addTodo in app.jsx using props to pass value to custom components
    onSubmit(newItem)

    setNewItem("")
  }

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input
          value={newItem}
          onChange={e => setNewItem(e.target.value)}
          type="text"
          id="item"
        />
      </div>
      <button className="btn">Add</button>
    </form>
  )
}