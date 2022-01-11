import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Registration from './components/Registration';
import Navbar from './components/Navbar';
import CourseDetails from './components/CourseDetails';
import DemoRegistration from './components/DemoRegistration';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route exact path="/register">
          <Navbar />
          <Registration />
        </Route>
        <Route exact path="/course-details">
          <Navbar />
          <CourseDetails />
        </Route>
        <Route exact path="/demo-registration">
          <Navbar />
          <DemoRegistration />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
