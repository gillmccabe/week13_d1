var React = require('react');
var List = require('./List');

var filmData = [
  {id: 1, title: "Sausage Party"},
  {id: 2, title: "Cafe Society"}
]

var FilmContainer = React.createClass({

  getInitialState: function(){
    return {data: filmData};
  },

  render: function(){
    return(
      <div className='film-container'>
        <h4>This Week's Films</h4>
        <List data={this.state.data}/>
      </div>
    )
  }

})

module.exports = FilmContainer;