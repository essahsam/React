import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Header from '../Header';
import AddPatient from '../AddPatient';
import PatientsList from '../PatientList';
import EditPatient from '../EditPatient';
import useLocalStorage from '../hooks/useLocalStorage';
import PatientsContext from '../context/BooksContext';



const AppRouter = () => {
    const [patients, setPatients] = useLocalStorage('patients', []);
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">

         <PatientsContext.Provider value={{ patients, setPatients }}>
          <Switch>
          <Route component={PatientsList} path="/" exact={true} />
              <Route component={AddPatient} path="/add" />
              <Route component={EditPatient} path="/edit/:id" />
              <Route component={() => <Redirect to="/" />} />
              




          {/* <Route
              render={(props) => (
                <BooksList {...props} books={books} setBooks={setBooks} />
              )}
              path="/"
              exact={true}/>
            
            {/* <Route component={BooksList} path="/" exact={true} /> */}
            {/* <Route component={AddBook} path="/add" /> */}

        <Route
            render={(props) => (
                <AddPatient {...props} patients={patients} setPatients={setPatients} />
            )}
                path="/add" />


                                        
            {/* <Route
              render={(props) => (
                <EditBook {...props} books={books} setBooks={setBooks} />
              )}
              path="/edit/:id"
            /> */} 

          {/* <Route component={() => <Redirect to="/" />} /> */}
          </Switch>
          </PatientsContext.Provider>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;