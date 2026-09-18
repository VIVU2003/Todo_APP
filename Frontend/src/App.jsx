import Todo from "./components/Todo";
import PopUp from "./components/PopUp";
import { useState } from "react";
import "./App.css";
function App() {
  const [todo, setTodo] = useState([
    // { id: 1, Title: "Go to gym", Deadline: "23/5/2026" },
    // { id: 2, Title: "Finish react ", Deadline: "21/9/2026" },
    
  ]);
  const [isVisible, setVisibility] = useState(false);
  const [isEdit, setedit] = useState(false);
  const [editTodo, setEditTodo] = useState(null);
  function saveTodo(task, deadline) {
    if (!isEdit) {
      if (!task || !deadline) {
        alert("Please enter valid input");
        return;
      }
      let idCount = todo.length>0?todo[todo.length - 1].id + 1:1
      setTodo((t)=>[...t, { id: idCount, Title: task, Deadline: deadline }]);
    }
    else{
      setTodo((t)=>
        t.map((x)=>{
          if(x.id==editTodo.id)
          {
            x.Title=task
          }
          return x
        })
      )
      setEditTodo(null)
    }
    setVisibility(false);
  }
  function openPopup() {
    setVisibility(true);
    setedit(false);
  }
  function getDetails(editingTodo) {
    setVisibility(true);
    setedit(true);
    setEditTodo(editingTodo);
  }
  return (
    <>
      <div className="heading-title">
           <h1>Todo App</h1>
      </div>
      <div id="d">
        <div id="d2">
          <h2>Tasks:</h2>
        </div>
        <div id="d1">
          <button className="add-task-button" onClick={openPopup}>
            Add Task
          </button>
        </div>
      </div>
      {todo.length>0? (
        <Todo tod={todo} update={setTodo} open={getDetails}></Todo>
      ):<p>Please add tasks</p>}
      {isVisible ? (
        <PopUp
          onSubmit={saveTodo}
          oldTodo={editTodo}
          onClose={() => {
            setVisibility(false);
            setEditTodo(null);
          }}
        />
      ) : null}
    </>
  );
}

export default App;
