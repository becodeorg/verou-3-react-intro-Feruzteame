import React, {useEffect} from 'react'


const List = function(props){
 

    useEffect(() => {
        console.log(props.tasklist)
    })
   
    return(
        <>
        <div id="list">
                {props.tasklist !== [] ? (
               <ul>
                  {props.tasklist.map((list) => (
                <li className="todolist" key={list.id} data-id={list.id}>
                    <input type="checkbox"></input>
                    <span>{list.time}</span>
                     {list.task} 
                     <button className="delete" onClick={(e) => props.deletetask(e)}> Delete </button> 
                </li>
            ))}
          </ul>
        ) : null}
       </div>         
     </>

    )
}
export default List