import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList';
import ItemModal from './components/ItemModal'

import { Provider } from 'react-redux'
import store from './store'


import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div>
        <AppNavbar />
        <ItemModal/>
        <ShoppingList />
        <h1>qwerty</h1>
      </div>
    </Provider>
  );
}

export default App;
