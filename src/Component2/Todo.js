import React, { useState } from "react";
import "./Todo.css";
const Todo = () => {
  const [input, setInput] = useState("");
  const [taskitem, settaskitem] = useState([]);
  //  const [edit , setEdit] = useState("");
 
  const items = (e) => {
    setInput(e.target.value);
  };

  function edittask(index) {
         
  }
 
  

  function addtask() {
    settaskitem((list) => {
      return     [...list, input];
    });
    setInput("");
  }
  const taskcontent = taskitem.map((candy, index) => {
    return (
      <div>
        <p>{candy}</p>
        <i class="fa-solid fa-pen-to-square" onClick={edittask}></i>
        <i
          class="fa-regular fa-trash-can"
          onClick={() => dlttask(index)}
        ></i>
      </div>
    );
  });

  function dlttask(index) {
    var duparray = [...taskitem];
    duparray.splice(index, 1);
    settaskitem(duparray);
  }
  return (
    <div className="row justify-content-center">
      <div className="col-md-5 shadow-lg p-3 mb-5 bg-white rounded">
        <h1>React Todo List</h1>
        <input
          type="text"
          placeholder="enter Task"
          className="form-control"
          value={input}
          onChange={items}
        />
        <button className="btn btn-success" onClick={addtask}>
          Add
        </button>
       
        <br />
        {taskcontent}
      </div>
    </div>
  );
}

export default Todo;
