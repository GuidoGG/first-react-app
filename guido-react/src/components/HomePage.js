import React from "react";
import {Link} from "react-router-dom";
import styled  from "styled-components";
import './guido.css';

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
  padding: '5rem 5rem',
  borderRadius: "10px"
}

function HomePage() {
  return (
    <Container>


    <div className="jumbotron">
      <h1>Pluralsight Administration</h1>
      <p>React, Flux, and React Router for ultra-responsive web apps.</p>
      <Link to="about" className="btn btn-primary">About</Link>
      <h1 style={{color:"red"}}>
     <p>

     </p>
        Hallo rode tekst
      </h1>
      <button style={guidoStyle}>Klik op mij</button>
      <p className="es-guido">hallo</p>
    </div>
    </Container>

  );
}

export default HomePage;
