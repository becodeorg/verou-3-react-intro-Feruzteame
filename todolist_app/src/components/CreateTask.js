
import Footer from "./Footer";
import React, { useState } from 'react';


function CreateTask() {

    const [task, setTask] = useState({list:""});
    const [tasklist, setTaskList] = useState([]);

  
  
    const handleChange = (e) => {
      setTask(e.target.value);
    };
   
  
    const AddTask = () => {
      if (task !== "") {
        const taskDetails = {
          id: Math.floor(Math.random() * 1000),
          value: task

        };
        console.log(task)
       setTaskList([...tasklist, taskDetails]);

        document.getElementById('text').innerText = " "
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
                    onChange={(e) => handleChange(e)}
                    placeholder="Add task here..."
                />
                <br/>
                <label htmlFor="time">Time</label> <br/>
                <input 
                   type="time"
                   onChange={(e) => handleChange(e)}
                   />
                <br/>
                <button type="submit" onClick={AddTask}>Add</button>
               
             </fieldset>
      </div>
      <div id="list">
                <ul>
                {tasklist !== [] ? (
               <ul>
                  {tasklist.map((t) => (
                <li className="todolist">
                     <input type="checkbox"></input>
                     {t.value}
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