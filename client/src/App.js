import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList';
import './App.css';

function App() {
  return (
    <div>
      <AppNavbar/>
      <ShoppingList/>
      <h1>qwerty</h1>
    </div>
  );
}

export default App;
