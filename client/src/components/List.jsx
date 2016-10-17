var React = require('react');
var Film = require('./film.jsx')

var List = React.createClass({

  render: function(){
      return (
        <Film title={film.title} key={film.id}>{film.title}</Film>
        );
  }
   


});

module.exports = List;