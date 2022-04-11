import Footer from "./Footer";

function List(){

    return(
        <>
            <div id="list">
                <h2>Here is your list</h2>
                <ul>
                    <li className="todolist">list1</li>
                    <li className="todolist">list2</li>
                    <li className="todolist">list3</li>
                    <li className="todolist">list4</li>
                    <li className="todolist">list5</li>
                </ul>
            </div>

            <Footer/>
        </>

    )
}
export default List