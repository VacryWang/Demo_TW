import "./input.css"
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home"
import AAA from "./pages/AAA"
import BBB from "./pages/BBB"

function App() {
  return (
    <div>
        <Routes>
            <Route path="/tailwind" element={ <Home /> }/>
            <Route path="/tailwind/aaa" element={ <AAA /> }/>
            <Route path="/tailwind/bbb" element={ <BBB /> }/>
        </Routes>
    </div>
  );
}

export default App;
