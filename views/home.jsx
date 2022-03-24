// import React and the Def function created in default.jsx
const React = require('react');
const Def = require('./default');

// Create stub function
function home() {
  // Use Def components(created in default.jsx) as html tag
  // then write a bit of stub home page code inside.
  // Don't forget to return
  return(
    <Def>
      <main>
        <h1>HOME</h1>
        <a href="/places">
          <button className="btn-primary">Places Page</button>
        </a>
      </main>
    </Def>
  )
};

// Export stub function
module.exports = home

