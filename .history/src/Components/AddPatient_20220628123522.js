// import React from 'react';

import React, { useContext } from 'react';
import PatientForm from './PatientForm';
import PatientsContext from './context/BooksContext';




const AddBook = ({ history }) => {
    const { books, setBooks } = useContext(BooksContext);

    const handleOnSubmit = (book) => {
      setBooks([book, ...books]);
      history.push('/');
    };

  return (
    <React.Fragment>
      <BookForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddBook;