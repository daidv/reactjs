

var Com = React.createClass({
  add(){
    this.setState({num: parseInt(this.state.num) + 1});
  },
  getInitialState(){
    return{
      num:0
    }
  },
  render: function(){
    return(
      <button onClick={this.add}>Hello {this.state.num} </button>
    );
  }
});

ReactDOM.render(
  <Com />,
  document.getElementById('root')
);
