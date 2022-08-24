import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from './components/OrderHandling/Home/Home';
import Footer from './components/OrderHandling/Footer/Footer';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
    </Routes>
    );
}

export default App;
