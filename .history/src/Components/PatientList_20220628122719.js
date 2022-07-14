
import _ from 'lodash';
import Patient from './Patient';
import React, { useContext } from 'react';
import PatientsContext from './context/PatientsContext';



const PatientList = () => {

    const { patients, setPatients } = useContext(PatientsContext);

  const handleRemoveBook = (id) => {
    setPatients(books.filter((book) => book.id !== id));
  };

  return (
    <React.Fragment>
      <div className="book-list">
        {!_.isEmpty(books) ? (
          books.map((book) => (
            <Book key={book.id} {...book} handleRemoveBook={handleRemoveBook} />
          ))
        ) : (
          <p className="message">No books available. Please add some books.</p>
        )}
      </div>
    </React.Fragment>
  );
};

export default PatientList;