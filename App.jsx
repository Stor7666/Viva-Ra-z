import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import PropertyDetails from './pages/PropertyDetails';
import CompanyDetails from './pages/CompanyDetails';
import SearchResults from './pages/SearchResults';
import Plans from './pages/Plans';
import UploadProperty from './pages/UploadProperty';
import UploadCompany from './pages/UploadCompany';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto p-4">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/property/:id" component={PropertyDetails} />
          <Route path="/company/:id" component={CompanyDetails} />
          <Route path="/search" component={SearchResults} />
          <Route path="/plans" component={Plans} />
          <Route path="/upload-property" component={UploadProperty} />
          <Route path="/upload-company" component={UploadCompany} />
          <Route path="/profile" component={Profile} />
          <Route component={NotFound} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
