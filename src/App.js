/*
 * @Author: your name
 * @Date: 2019-11-14x 14:04:30
 * @LastEditTime: 2019-11-14 16:42:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \reactele\src\App.js
 */
import React from 'react';
// import { Button } from 'element-react';
import 'element-theme-default';
import {BrowserRouter} from "react-router-dom"
import Router from "./router"

function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Router></Router>
     </BrowserRouter>
    </div>
  );
}

export default App;
