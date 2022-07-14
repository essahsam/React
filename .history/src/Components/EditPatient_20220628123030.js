
// import React from 'react';

import React, { useContext } from 'react';
import BookForm from './PatientForm';
import { useParams } from 'react-router-dom';
import BooksContext from './context/BooksContext';



const EditPatient = ({ history}) => {

    const { patients, setPatients } = useContext(PatientsContext);
    
  const { id } = useParams();
  const bookToEdit = books.find((book) => book.id === id);

  const handleOnSubmit = (book) => {
    const filteredBooks = books.filter((book) => book.id !== id);
    setBooks([book, ...filteredBooks]);
    history.push('/');
  };

  return (
    <div>
      <BookForm book={bookToEdit} handleOnSubmit={handleOnSubmit} />
    </div>
  );
};

export default EditBook;