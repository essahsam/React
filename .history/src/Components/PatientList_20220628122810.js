
import _ from 'lodash';
import Patient from './Patient';
import React, { useContext } from 'react';
import PatientsContext from './context/PatientsContext';



const PatientList = () => {

    const { patients, setPatients } = useContext(PatientsContext);

  const handleRemoveBook = (id) => {
    setPatients(patients.filter((patient) => patient.id !== id));
  };

  return (
    <React.Fragment>
      <div className="patient-list">
        {!_.isEmpty(patients) ? (
          patients.map(() => (
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