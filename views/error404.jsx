// Import React and Def() created in default.jsx
const React = require('react');
const Def = require('./default');

function error404 () {
  return (
    <Def>
        <main>
            <h1>404: PAGE NOT FOUND</h1>
            <p>Oops, sorry, we can't find this page!</p>
            <div>
              <img src="public/css/images/jeremy-bezanger-d3XLRKIb0S4-unsplash.jpg" alt="Kangaroo"/>
              <div>
                Photo by <a href="https://unsplash.com/photos/d3XLRKIb0S4">Jeremy Bezanger</a> on <a href="https://unsplash.com/s/photos/funny">Unsplash</a>
              </div>
            </div>
        </main>
    </Def>
  )
}

module.exports = error404