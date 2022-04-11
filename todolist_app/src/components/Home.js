
import Footer from "./Footer";


const Home = ()=>{

    return(
        <>
            <div id="form">
                <form action="">
                    <fieldset>
                        <legend>Fill Your Todolist </legend>
                        <label htmlFor="name">Your List</label> <br/>
                        <input type="text" name="name"/>
                        <br/>
                        <label htmlFor="time">Time</label> <br/>
                        <input type="time"/>
                        <br/>
                        <button type="submit">Add</button>
                    </fieldset>
                </form>
            </div>

            <Footer/>
        </>

    )
}
export default Home