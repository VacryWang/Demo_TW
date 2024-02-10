import "./input.css"
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home"
import Card from "./pages/Card"
import Header from "./pages/Header"
import Sidebar from "./pages/Sidebar"
import Footer from "./pages/Footer"
import Table from "./pages/Table"
import Form from "./pages/Form";

function App() {
  return (
    <div>
        <Routes>
            <Route path="/Demo_TW" element={ <Home /> }/>
            <Route path="/Demo_TW/card" element={ <Card /> }/>
            <Route path="/Demo_TW/header" element={ <Header /> }/>
            <Route path="/Demo_TW/sidebar" element={ <Sidebar /> }/>
            <Route path="/Demo_TW/footer" element={ <Footer /> }/>
            <Route path="/Demo_TW/table" element={ <Table /> }/>
            <Route path="/Demo_TW/form" element={ <Form /> }/>
        </Routes>
    </div>
  );
}

export default App;
