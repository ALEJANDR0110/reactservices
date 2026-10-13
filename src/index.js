import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ComponentServiceCustomer from './components/ComponentServiceCustomer';
import ComponentServiceSuppliers from './components/ComponentServiceSuppliers';
import EmpleadosDepartamentos from './components/EmpleadosDepartamentos';
import EmpleadosOficios from './components/EmpleadosOficios';
import DepartamentosComponent from './components/maestrodetalle/DepartamentosComponent';
import CochesComponent from './components/maestrodetalle/CochesComponent';
import MenuComponent from './components/MenuComponent';
import Router from './components/Router';
import 'bootstrap/dist/css/bootstrap.min.css'
import $ from 'jquery'
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div style={{margin: "auto", width: "50%"}}>
    <Router />
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
