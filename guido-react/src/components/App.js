import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Header from "./common/Header";
import CoursesPage from "./CoursesPage";
import {Route, Switch, Redirect} from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import ManageCoursePage from "./ManageCoursePage";
import Portfolio from "./Portfolio";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './guido.css';

function App() {
  
  return (
    <div className="container-fluid">
      <ToastContainer autoClose={3000} hideProgressbarr />
      <Header />
      <Switch>
      <Route path="/" exact component={HomePage}/>
      <Route path="/courses" component={CoursesPage}/>
      <Route path="/about" component={AboutPage}/>
      <Route path= "/course/:slug" component={ManageCoursePage}/>
      <Route path= "/course" component={ManageCoursePage}/>
      <Route path= "/portfolio" component={Portfolio}/>
      <Redirect from="/about-page" to="/about"/>
      <Route component={NotFoundPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
