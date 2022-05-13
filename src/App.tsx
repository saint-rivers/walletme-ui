import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./core/Home";
import AddTransactionForm from "./transactions/AddTransactionForm";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/transactions' element={<AddTransactionForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
