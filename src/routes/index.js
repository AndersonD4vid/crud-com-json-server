import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Error from '../pages/Error';
import NewProject from "../pages/NewProject";
import Header from "../components/Header";
import Projects from "../pages/Projects";
import Editar from "../pages/Editar";

export default function RoutesApp() {
   return (
      <BrowserRouter>
         <Header />
         <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/project/:id" element={<Editar />} />
            <Route path="/new-project" element={<NewProject />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="*" element={<Error />} />
         </Routes>
      </BrowserRouter>
   );
}