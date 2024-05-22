import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import "preline/preline";
// import { IStaticMethods } from "preline/preline";

import "./input.css"
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home"
import Card from "./pages/Card"
import Header from "./pages/Header"
import Sidebar from "./pages/Sidebar"
import Footer from "./pages/Footer"
import Table from "./pages/Table"
import Form from "./pages/Form";
import Page from "./pages/Page";
import Animation from "./pages/Animation"
import TestLottie from "./pages/Test Lottie";

import { AnimatePresence } from "framer-motion";

function App() {

    const location = useLocation();

    useEffect(() => {
        window.HSStaticMethods.autoInit();
    }, [location.pathname]);

  return (
    <div>
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/Demo_TW" element={ <Home /> }/>
                <Route path="/Demo_TW/card" element={ <Card /> }/>
                <Route path="/Demo_TW/header" element={ <Header /> }/>
                <Route path="/Demo_TW/sidebar" element={ <Sidebar /> }/>
                <Route path="/Demo_TW/footer" element={ <Footer /> }/>
                <Route path="/Demo_TW/table" element={ <Table /> }/>
                <Route path="/Demo_TW/form" element={ <Form /> }/>
                <Route path="/Demo_TW/page" element={ <Page /> }/>
                <Route path="/Demo_TW/animation" element={ <Animation /> }/>
                <Route path="/Demo_TW/test_lottie" element={ <TestLottie /> }/>
            </Routes>
        </AnimatePresence>
    </div>
  );
}

export default App;
