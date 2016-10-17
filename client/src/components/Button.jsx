var React = require('react');

var Button = React.createClass({

  buttonClick: function(){
  },

  render: function(){
    return(
      <div>
        <button onClick={this.buttonClick}>{this.props.label}</button>
      </div>
      )
  }

})

module.exports = Button;