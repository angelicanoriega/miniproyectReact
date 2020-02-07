import React from 'react';
import logo from '../img/logo.svg';

class menu extends React.Component {
    render() {
      return (
        <nav className="navbar navbar-expand-md navbar-detail">
            <a className="navbar-brand" href="#root">
                <img src={logo} alt="img"/></a> 
            <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#comentarios">Comentarios</a>
            </li>
          </ul>
        </nav> 
      );
    }
  }
  
export default menu;