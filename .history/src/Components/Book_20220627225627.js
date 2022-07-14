
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Book = ({
  id,
  patient,
  author,
  price,
  quantity,
  date,
  handleRemoveBook
}) => {
    
    const history = useHistory();

  return (
    <Card style={{ width: '18rem' }} className="book">
      <Card.Body>
        <Card.Title className="book-title">{patient}</Card.Title>
        <div className="book-details">
          <div>Doctor: {author}</div>
          <div>Quantity: {quantity} </div>
          <div>Price: {price} </div>
          <div>Date: {new Date(date).toDateString()}</div>
        </div>
        {/* <Button variant="primary">Edit</Button>{' '} */}
        <Button variant="primary" onClick={() => history.push(`/edit/${id}`)}>Edit</Button>{' '}
        <Button variant="danger" onClick={() => handleRemoveBook(id)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Book;