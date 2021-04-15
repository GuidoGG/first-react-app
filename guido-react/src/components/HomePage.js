import React from "react";
import {Link} from "react-router-dom";
import styled  from "styled-components";
import './guido.css';
import InputElement from "./Input";
import logo from "./Pictures/logo192.png";

const Container = styled.section`
color:red;
position:relative;
max-width: 80%;
font-size: 1.25em;
padding: 1em 1 em 2em 1em;
background: #2b283d;
margin: 2em;

@media (min-width: 800px){
  font-size:2em;
  color:blue;
}
`


const guidoStyle = {
  color: "white",
  background: "blue",
  padding: '1rem 1rem',
  borderRadius: "1px"
}

function HomePage() {
  return (
    <Container>
      <div className="jumbotron">
      <h1>Guido's First React App</h1>
      <p>Creating a website and adding components</p>
      <Link to="about" className="btn btn-primary">About</Link>
      <h1 style={{color:"red"}}>
     <p>

     </p>
     <InputElement className="es-guido"/>
        Hallo rode tekst
      </h1>
      <p>
        Hier komt een paragraaf aan text.
      </p>
      <img src={logo} alt="guido"/>
      <img src={logo} alt="guido"/>
      <img src={logo} alt="guido"/>
      <div></div>
      <button style={guidoStyle}>Klik op mij</button>
      <p className="es-guido">hallo</p>
    </div>
    </Container>

  );
}

export default HomePage;
