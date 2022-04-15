import React, {useEffect} from 'react'
import {v4 as uuid} from "uuid";


const List = function(props){
const unique_id = uuid();
    useEffect(() => {
        console.log(props.tasklist)
    })

    return(
        <>
        <div id="list">
                {props.tasklist !== [] ? (
               <ul>
                  {props.tasklist.map((list) => (
                <li className="todolist" key={unique_id}>
                     <input type="checkbox"></input>
                    {list.task} <span>{list.time}</span>
                </li>
            ))}
          </ul>
        ) : null}
       </div>         
     </>

    )
}
export default List