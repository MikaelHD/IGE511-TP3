import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderLayout from "./HeaderLayout";
import InterfaceA from "./pages/InterfaceA";
import InterfaceB from "./pages/InterfaceB";

export default function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path={'/'} element={<HeaderLayout/>}>
              <Route path={'interface-a'} element={<InterfaceA/>} />
              <Route path={'interface-b'} element={<InterfaceB/>} />
            </Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}