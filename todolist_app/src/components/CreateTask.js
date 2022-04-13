
import Footer from "./Footer";
import React, { useState,useRef } from 'react';
import {v4 as uuid} from "uuid";


function CreateTask() {

  const unique_id = uuid();
  const task = useRef();
  const time = useRef();

    const [tasklist, setTaskList] = useState([]);
   
   const AddTask = () => {
      if (task !== "") {
        const taskCurrent = task.current
        const timeCurrent = time.current
        const taskValue = taskCurrent.value;
        const timeValue = timeCurrent.value;
        const listObject = {
          task: taskValue,
          time: timeValue
        }
        const newTaskList =  [...tasklist, listObject];
        setTaskList(newTaskList)
        console.log(newTaskList)
        taskCurrent.value = "";
        timeCurrent.value = "";
        return newTaskList
        
      }else{
        alert("Please add some text before add")
      }
      
    };


    const checkIt = ()=>{
      const style = {
        color: 'white',
        fontSize: 200
      };
      return style
    }

  
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
                    ref={task}
                    placeholder="Add task here..."
                />
                <br/> 
                <label htmlFor="time">Time</label> <br/>
                <input 
                   type="time"
                   ref={time}
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
                <li className="todolist" key={unique_id}>
                     <input type="checkbox" onClick={checkIt}></input>
                    {list.task} <span>{list.time}</span>
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