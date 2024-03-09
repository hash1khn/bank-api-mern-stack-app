import { useState } from "react";

import Sidebar from "./components/Sidebar.jsx";

import "./App.css";
import CreateNewUser from "./components/CreateNewUser.jsx";
import MainLayout from "./components/home/MainLayout.jsx";

function App() {
    return (
        <div className="App">
            <MainLayout />
        </div>
    );
}

export default App;
