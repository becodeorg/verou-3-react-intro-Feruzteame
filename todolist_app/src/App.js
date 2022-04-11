import logo from './logo.svg';
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import List from "./components/List";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Form/>
      <List/>
      <Footer />
    </div>

  );
}

export default App;
