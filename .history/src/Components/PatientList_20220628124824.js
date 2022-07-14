
import _ from 'lodash';
import Patient from './Patient';
import React, { useContext } from 'react';




const PatientList = () => {

    const { patients, setPatients } = useContext(Pat);

  const handleRemovePatient = (id) => {
    setPatients(patients.filter((patient) => patient.id !== id));
  };

  return (
    <React.Fragment>
      <div className="patient-list">
        {!_.isEmpty(patients) ? (
          patients.map((patients) => (
            <Patient key={patients.id} {...patients} handleRemovePatient={handleRemovePatient} />
          ))
        ) : (
          <p className="message">No Patient available. Please add some PATIENT.</p>
        )}
      </div>
    </React.Fragment>
  );
};

export default PatientList;