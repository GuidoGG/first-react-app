import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';


const testData = [
  {name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/8104", company: "@facebook"},
  {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
  {name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
];

const CardList = (props) => (
<div>
  {testData.map(profile => <Card {...profile}/>)}
</div>
);

class Form extends React.Component {
  render(){
    return(
      <form action="">
        <input type="text" placeholder= "GitHub username"/>
        <button> Add card</button>
        <button> Add card</button>
        </form>
    );
  }
}

class Card extends React.Component {
	render() {
  	const profile = this.props;
  	return (
    	<div className="github-profile">
    	  <img src={profile.avatar_url} />
        <div className="info">
          <div className="name">{profile.name}</div>
          <div className="company">{profile.company}</div>
        </div>
    	</div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{color: 'red'}}>
          Rode letters
        </p>

        <p style={{fontSize: '200%'}}>
          Grote letters
        </p>

        <p style={{fontSize: '200%'}}>
          Nieuwe letters update
        </p>

        <div>
        <CardList />
    	</div>
        <Form/>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
           </a> </header>
    </div>
  );
}


export default App;