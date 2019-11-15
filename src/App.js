import React from 'react';
import './App.css';
import myFace from './kousik.jpg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={myFace} className="App-logo" alt="logo" />
        <p>
          Hi! fixing something.. Checkout here &darr; <code>{ new Date().toLocaleString() }</code>
        </p>
        <div className="follow-me-conatiner">
          <a
            className="App-link"
            href="https://github.com/kousikmitra"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img alt="github" className="follow-me" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" />
          </a>
          <a
            className="App-link"
            href="https://www.linkedin.com/in/kousik-m-83235aa0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img alt="linkedin" className="follow-me" src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg" />
          </a>
          <a
            className="App-link"
            href="https://stackoverflow.com/users/7718559/kousik-mitra"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img alt="stackoverflow" className="follow-me" src="https://cdn.sstatic.net/Sites/stackoverflow/company/img/logos/so/so-icon.svg?v=f13ebeedfa9e" />
          </a>
          <a
            className="App-link"
            href="https://www.instagram.com/_k.mitter_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img alt="instagram" className="follow-me" src="https://en.instagram-brand.com/wp-content/uploads/2016/11/Glyph-Icon-hero.png" />
          </a>
          </div>
      </header>
    </div>
  );
}

export default App;
