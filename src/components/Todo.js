import React, { useState } from 'react'

function Todo() {
 
  const [task, setTask]= useState("")
  const [list, setList]= useState([])

  const addTask = (e) => {
    setTask(e.target.value)
  };
   function todList() {

   };
    
  return (
    <div className='container'>
      <h1>Todo List</h1>
        <div>
          <input type="text" onChange={addTask} />
          <button className='btn btn-success m-3'>Add Task</button>
        </div>

        <div>
          {todList}
        </div>
    </div>
  )
}

export default Todo;