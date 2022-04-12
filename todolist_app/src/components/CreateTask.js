
import Footer from "./Footer";
import React, { useState } from 'react';


function CreateTask() {

    const [task, setTask] = useState({list:"", time:""});
    const [tasklist, setTaskList] = useState([]);
   
   const AddTask = () => {
      if (task !== "") {
        const taskDetails = {
          id: Math.floor(Math.random() * 1000),
          value: task
        };
        console.log(task)
       setTaskList(prevState => {
        return [...prevState, {taskDetails}]
  });
      }else{
        alert("Please add some text before add")
      }
      
    };
  
   return (
       <>
      <div className="form">
          <fieldset>
                <legend>Fill Your Todolist </legend>
                <label htmlFor="name">Your List</label> <br/>
               
                <input
                    type="text"
                    name="list"
                    id="text"
                    onChange={(e) =>setTask({...task, list: e.target.value}) }
                    placeholder="Add task here..."
                />
                <br/> 
                <label htmlFor="time">Time</label> <br/>
                <input 
                   type="time"
                   onChange={(e) =>setTask({...task, time: e.target.value}) }
                   />
                <br/>
                <button type="submit" onClick={AddTask}>Add</button>
               
             </fieldset>
      </div>
      <div id="list">
                <ul>
                {tasklist !== [] ? (
               <ul>
                  {tasklist.map((list) => (
                <li className="todolist" key={list.id}>
                     <input type="checkbox"></input>
                     {task.list} <span>{task.time}</span>
                </li>
            ))}
          </ul>
        ) : null}
                </ul>
            </div>
      <Footer/>
      </>
       );
       
  }


export default CreateTask