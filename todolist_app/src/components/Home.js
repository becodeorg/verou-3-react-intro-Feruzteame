
import Footer from "./Footer";
import Navbar from "./Navbar";

const Home = ()=>{

    return(
        <>
            <Navbar/>
            <form action="">
                <fieldset>
                    <legend>Your Todolist </legend>
                    <label htmlFor="name">Your List</label> <br/>
                    <input type="text" name="name"/>
                    <br/>
                    <label htmlFor="time">Time</label> <br/>
                    <input type="time"/>
                    <br/>
                    <button type="submit">Add</button>
                </fieldset>
            </form>
            <Footer/>
        </>

    )
}
export default Home