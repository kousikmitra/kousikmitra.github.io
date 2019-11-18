import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import DefaultPage from './components/default'
import Header from './components/header'

export default function App() {
  return (
    <div className="App">
     <Router>
      <header className="header">
        <Header></Header>
      </header>
      <main className="main">
        <Switch>
          <Route exact path="/">
            <NoMatch />
          </Route>
          <Route path="/about-me">
            <NoMatch />
          </Route>
          <Route path="/projects">
            <NoMatch />
          </Route>
          <Route path="/my-clicks">
            <NoMatch />
          </Route>
          <Route path="/others">
            <NoMatch />
          </Route>
          <Route path="/*">
            <NoMatch />
          </Route>
        </Switch>
        </main>
    </Router>
    </div>
  );
}

function NoMatch() {
  return (
      <DefaultPage></DefaultPage>
  );
}