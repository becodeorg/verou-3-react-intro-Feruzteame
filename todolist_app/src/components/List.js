import React, {useEffect} from 'react'


const List = function(props){
 

    useEffect(() => {
        console.log(props.tasklist)
    })
    const am_pm = (time) => {
      if(0 < time && 12 > time){
        console.log(time)
          return("am")
          
      }else{
        return("pm")
      }
    
    }
  
    return(
        <>
        <div id="list">
                {props.tasklist !== [] ? (
               <ul>
                  {props.tasklist.map((list) => (
                <li className="todolist" key={list.id} data-id={list.id} >
                    <input type="checkbox"></input>
                    <span>{list.time} {am_pm(list.time)}</span>
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