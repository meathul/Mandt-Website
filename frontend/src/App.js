import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
           <Route path="/" element={<LandingPage/>}/>
           <Route path="/home" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
