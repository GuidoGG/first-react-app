import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Header from "./common/Header";
import CoursesPage from "./CoursesPage";
import HooksPage from "./HooksPage";

function App(){
    function getPage(){
    const route = window.location.pathname;
    if (route === "/courses") return <CoursesPage/>;
    if (route === "/about") return <AboutPage/>;
    if (route === "/hookspage") return <HooksPage/>;
    return <HomePage/>;
}
return (
<div className="container-fluid">
<Header/>
{ getPage()}
</div>
);
}

export default App;