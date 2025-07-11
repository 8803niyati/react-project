
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import PatientForm from "./Components/PatientForm";

const App = () => {
  const [patients, setPatients] = useState([]);

 
  return (
    <div className="container mt-5">
      <PatientForm />
    </div>
  );
};



export default App;
