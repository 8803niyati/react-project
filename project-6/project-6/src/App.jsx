
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import PatientForm from "./Components/PatientForm";

const App = () => {
  const [patients, setPatients] = useState([]);

  return (
    <div className="form-wrapper">
      <Container className="content-box">
        <h2 className="text-center mb-4"> Hospital Management</h2>
        <PatientForm patients={patients} setPatients={setPatients} />
      </Container>
    </div>
  );
};

export default App;
