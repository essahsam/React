import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const PatientForm = (props) => {
    const [patients, setPatient] = useState(() => {
        return {
          patientname: props.patient ? props.patient.patientname : '',
          doctor: props.doctor ? props.patient.doctor : '',
          illness: props.patient ? props.patient.illness : '',
          price: props.patient ? props.patient.price : '',
          date: props.patient ? props.patient.date : ''
        };
      });

  const [errorMsg, setErrorMsg] = useState('');
  const { patientname, doctor, price, illness } = patient;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [patientname, doctor, price, illness];
    let errorMsg = '';

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '' && value !== '0';
    });

    if (allFieldsFilled) {
      const patient = {
        id: uuidv4(),
        pa,
        doctor,
        price,
        illness,
        date: new Date()
      };
      props.handleOnSubmit(patient);
    } else {
      errorMsg = 'Please fill out all the fields.';
    }
    setErrorMsg(errorMsg);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'illness':
        if (value === '' || parseInt(value) === +value) {
          setPatients((prevState) => ({
            ...prevState,
            [name]: value
          }));
        }
        break;
      case 'price':
        if (value === '' || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
          setPatients((prevState) => ({
            ...prevState,
            [name]: value
          }));
        }
        break;
      default:
        setPatients((prevState) => ({
          ...prevState,
          [name]: value
        }));
    }
  };

  return (
    <div className="main-form">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Patient Name</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="bookname"
            value={patient}
            placeholder="Enter name of patient"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="doctor">
          <Form.Label>Doctor</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="doctor"
            value={doctor}
            placeholder="Enter name of Doctor"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="illness">
          <Form.Label>illness</Form.Label>
          <Form.Control
            className="input-control"
            type="number"
            name="illness"
            value={illness}
            placeholder="Enter available Illness"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="price">
          <Form.Label>Treatment Price</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="price"
            value={price}
            placeholder="Enter treatment of illness"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="submit-btn">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default PatientForm;

