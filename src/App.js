import logo from './logo.svg';
import './App.css';
import Navbar from './Comp/Navbar';
import NewProducts from './Comp/NewProducts';
import Contact from './Comp/Contact';

function App() {
  return (
    <div>
    <Navbar/>
    <NewProducts/>
    <Contact/>
    </div>
  );
}

export default App;
