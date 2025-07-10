
import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col, Table } from "react-bootstrap";
import "../App.css";

const defaultForm = {
  name: "",
  age: "",
  gender: "",
  disease: "",
  contact: "",
};

const PatientForm = ({ patients, setPatients }) => {
  const [form, setForm] = useState(defaultForm);
  const [errors, setErrors] = useState({});
  const [editData, setEditData] = useState(null);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("patients")) || [];
    setPatients(storedData);
  }, []);

  useEffect(() => {
    localStorage.setItem("patients", JSON.stringify(patients));
  }, [patients]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const validate = () => {
    const err = {};
    if (!form.name.trim()) err.name = "Name is required";
    if (!form.age) err.age = "Age is required";
    if (!form.gender) err.gender = "Gender is required";
    if (!form.disease.trim()) err.disease = "Disease is required";
    if (!form.contact.trim()) err.contact = "Contact is required";
    return err;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validate();
    if (Object.keys(err).length > 0) {
      setErrors(err);
    } else {
      if (editData) {
        const updatedList = patients.map((p) => (p.id === form.id ? form : p));
        setPatients(updatedList);
        setEditData(null);
      } else {
        setPatients([...patients, { ...form, id: Date.now() }]);
      }
      setForm(defaultForm);
      setErrors({});
    }
  };

  const handleEdit = (data) => {
    setForm(data);
    setEditData(data);
  };

  const handleDelete = (id) => {
    const filtered = patients.filter((p) => p.id !== id);
    setPatients(filtered);
  };

  const handleClearAll = () => {
    setPatients([]);
    localStorage.removeItem("patients");
  };

  return (
    <>
      <div className="shadow rounded p-4 mb-4 bg-white from-shadow">
        {/* <h2>{editData ? "Update Patient" : "Hospital managment"}</h2> */}
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  isInvalid={!!errors.name}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.name}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Age</Form.Label>
                <Form.Control
                  type="number"
                  name="age"
                  value={form.age}
                  onChange={handleChange}
                  isInvalid={!!errors.age}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.age}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Gender</Form.Label>
                <Form.Select
                  name="gender"
                  value={form.gender}
                  onChange={handleChange}
                  isInvalid={!!errors.gender}
                >
                  <option value="">-- Select --</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {errors.gender}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Disease</Form.Label>
                <Form.Control
                  name="disease"
                  value={form.disease}
                  onChange={handleChange}
                  isInvalid={!!errors.disease}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.disease}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Contact</Form.Label>
                <Form.Control
                  name="contact"
                  value={form.contact}
                  onChange={handleChange}
                  isInvalid={!!errors.contact}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.contact}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>

          <Button type="submit" variant="primary" className="me-2">
            {editData ? "Update" : "Add"} Patient
          </Button>
          <Button variant="danger" onClick={handleClearAll}>
            Clear All
          </Button>
        </Form>
      </div>

      {/* Table Section */}
      <Table striped bordered hover responsive className="mt-4">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Disease</th>
            <th>Contact</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {patients.length === 0 ? (
            <tr>
              <td colSpan="7" className="text-center">
                No records found.
              </td>
            </tr>
          ) : (
            patients.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.gender}</td>
                <td>{item.disease}</td>
                <td>{item.contact}</td>
                <td>
                  <Button
                    variant="warning"
                    size="sm"
                    onClick={() => handleEdit(item)}
                    className="me-2"
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </>
  );
};

export default PatientForm;
