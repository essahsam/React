// import React from 'react';

import React, { useContext } from 'react';
import PatientForm from './PatientForm';
import PatientsContext from './context/PatientContext';




const AddPatient = ({ history }) => {
    const { patients, setPatients } = useContext(PatientContext);

    const handleOnSubmit = (patient) => {
      setPatients([patient, ...patients]);
      history.push('/');
    };

  return (
    <React.Fragment>
      <PatientForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddPatient;