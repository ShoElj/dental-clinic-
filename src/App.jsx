import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Login from './Components/Auth/Login';
import SuperAdminDashboard from './Components/Dashboard/SuperAdminDashboard';
import DoctorDashboard from './Components/Dashboard/DoctorDashboard';
import AccountsDashboard from './Components/Dashboard/AccountsDashboard';
import DietitianDashboard from './Components/Dashboard/DietitianDashboard';
import MedicalRecords from './Components/Records/MedicalRecords';
import CreateProfile from './Components/Profiles/CreateProfile';
import { AuthProvider, useAuth } from './contexts/AuthContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user } = useAuth();
  return (
    <Route
      {...rest}
      render={props =>
        user ? (
          <Components {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <PrivateRoute path="/superadmin" component={SuperAdminDashboard} />
          <PrivateRoute path="/doctor" component={DoctorDashboard} />
          <PrivateRoute path="/accounts" component={AccountsDashboard} />
          <PrivateRoute path="/dietitian" component={DietitianDashboard} />
          <PrivateRoute path="/medical-records" component={MedicalRecords} />
          <PrivateRoute path="/create-profile" component={CreateProfile} />
          <Redirect from="/" to="/login" />
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default App;
