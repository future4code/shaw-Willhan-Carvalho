import './App.css';
import React from 'react';
import { Inicial } from "./pages/Inicial";

export class App extends React.Component {


  render() {


    return (

      <div className="App">

        <Inicial></Inicial>
        
      </div>
    );
  }
}

export default App;