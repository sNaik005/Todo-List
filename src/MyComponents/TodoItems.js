import React from 'react'

export const TodoItems = ({todo, onDelete}) => {
  return (
    <>
    <div>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <buttton className="btn btn-sm btn-danger" onClick= {()=>{onDelete(todo)}}>Delete</buttton>
    </div>
    <hr />
    </>
  )
}
