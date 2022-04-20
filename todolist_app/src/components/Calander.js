
import  React ,{useState} from 'react';
import Calendar from 'react-calendar'


export const Calander = () => {
    const [dateState, setDateState] = useState(new Date())
    const changeDate = (e) => {
        setDateState(e)
        console.log(new Date())
      }
   return (
        <div className='calander'>
           <Calendar 
            value={dateState}
            onChange={changeDate} 
            />
        </div>
    );
};