import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import HomePage from './component/HomePage';
import CategoryPage from './component/CategoryPage';
import BookPage from './component/BookPage';

const App = () => {
  return (
    <div className="App text-secondary">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/browse" component={HomePage}/>
          <Route exact path="/category" component={CategoryPage}/>
          <Route exact path="/category/:id" component={CategoryPage}/>
          <Route exact path="/book/:isbn13" component={BookPage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
