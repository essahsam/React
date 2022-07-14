// import React from 'react';

import React, { useContext } from 'react';
import PatientForm from './PatientForm';
import PatientsContext from './context/PatientsContext';




const AddBook = ({ history }) => {
    const { patients, setPatients } = useContext(PatientsContext);

    const handleOnSubmit = (patient) => {
      setPatients([book, ...books]);
      history.push('/');
    };

  return (
    <React.Fragment>
      <BookForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddBook;