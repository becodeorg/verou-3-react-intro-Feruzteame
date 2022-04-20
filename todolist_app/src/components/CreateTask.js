

import React, { useState,useRef,useEffect } from 'react';
import {v4 as uuid} from "uuid";

import List from "./List";


function CreateTask() {

  const task = useRef();
  const time = useRef();

    const [tasklist, setTaskList] = useState([]);
   
   const AddTask = () => {

      if (task !== "") { 
        const taskValue = task.current.value;
        const timeValue = time.current.value;
        const listObject = {
          id: task.current.getAttribute('data-key'),
          task: taskValue,
          time: timeValue,
        }
        const newTaskList =  [...tasklist, listObject];
        setTaskList(newTaskList)
        console.log(newTaskList)
        task.current.value = "";
        time.current.value = "";
        return newTaskList
        }else{
        alert("Please add some text before add")
      }
      
    };


// local storage
    useEffect(() => {
       const data = window.localStorage.getItem('List')
      if(data){
        setTaskList(JSON.parse(data))
        } 
  },[])

    useEffect(() => {
      window.localStorage.setItem('List', JSON.stringify(tasklist))
  },[tasklist])

// delete item 
const deletetask = (e) => {
  e.preventDefault();
 let li = e.target.closest('li')
 let id = li.getAttribute('data-id')
  setTaskList(tasklist.filter((list) => list.id !== id));
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
                    data-key={uuid()}
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
         <List tasklist={tasklist} deletetask={deletetask} />
       
      </>
       );
       
  }


export default CreateTask