import React from 'react';
import './index.css';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";

import { Home } from './components/Home/Home';
import { Lists } from './components/Lists/Lists';
import { Plans } from './components/Plans/Plans';
import { Stats} from './components/Stats/Stats'
import { Others } from './components/Others/Others'
import { Login } from './components/Account/Login'
import { Signup } from './components/Account/Signup'

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="home" element={ <Home />} />
        <Route path="lists" element={ <Lists />} />
        <Route path="plans" element={ <Plans />} />
        <Route path="stats" element={ <Stats />} />
        <Route path="others" element={ <Others />} />
        <Route path="Login" element={ <Login />} />
        <Route path="Signup" element={ <Signup />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);

