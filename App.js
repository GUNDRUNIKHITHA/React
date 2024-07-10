
import './App.css';
import Counter from './components/Counter';
import Home from './components/Home';
import {BrowserRouter ,Route, Routes} from 'react-router-dom';


function App() {
  return (
    <div className="App">
         <BrowserRouter>
                <Routes>
                 <Route path="/" element={<Counter/>}></Route>
                  <Route path="/Home" element={<Home/>}></Route>
                </Routes>
         </BrowserRouter>
    </div>
  );
}

export default App;




