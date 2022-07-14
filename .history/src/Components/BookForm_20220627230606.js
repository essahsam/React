import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const BookForm = (props) => {
    const [book, setBook] = useState(() => {
        return {
          bookname: props.book ? props.book.bookname : '',
          author: props.book ? props.book.author : '',
          quantity: props.book ? props.book.quantity : '',
          price: props.book ? props.book.price : '',
          date: props.book ? props.book.date : ''
        };
      });

  const [errorMsg, setErrorMsg] = useState('');
  const { patient, doctor, price, illness } = book;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [patient, doctor, price, illness];
    let errorMsg = '';

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '' && value !== '0';
    });

    if (allFieldsFilled) {
      const patient = {
        id: uuidv4(),
        patient,
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
          setBook((prevState) => ({
            ...prevState,
            [name]: value
          }));
        }
        break;
      case 'price':
        if (value === '' || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
          setBook((prevState) => ({
            ...prevState,
            [name]: value
          }));
        }
        break;
      default:
        setBook((prevState) => ({
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
          <Form.Label>patient Name</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="bookname"
            value={patient}
            placeholder="Enter name of book"
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
            name="quantity"
            value={quantity}
            placeholder="Enter available quantity"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="price">
          <Form.Label>Book Price</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="price"
            value={price}
            placeholder="Enter price of book"
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

export default BookForm;

