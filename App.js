import React, { Component } from 'react';
import logo from './logo.svg';
import './styles.css';
import {Header} from './Header.jsx';
class App extends Component {
 render() {
   return (
     <div>
     <div className="backDrop"></div>
     <div>
       <Header />
     </div>
     </div>
   );
 }
}

export default App;
