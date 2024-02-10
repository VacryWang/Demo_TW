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
            <Route path="/tailwind" element={ <Home /> }/>
            <Route path="/tailwind/card" element={ <Card /> }/>
            <Route path="/tailwind/header" element={ <Header /> }/>
            <Route path="/tailwind/sidebar" element={ <Sidebar /> }/>
            <Route path="/tailwind/footer" element={ <Footer /> }/>
            <Route path="/tailwind/table" element={ <Table /> }/>
            <Route path="/tailwind/form" element={ <Form /> }/>
        </Routes>
    </div>
  );
}

export default App;
