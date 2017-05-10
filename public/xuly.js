
var list;
function addDiv(){
  ReactDOM.render(
    <InputDiv />, document.getElementById('div-add')
  );
}

var List = React.createClass({
  getInitialState(){
    list = this;
    return{
      mang: []
    }
  },
  render(){
    return(
      <div className="div-list">
        <div id="div-add"></div>
        <button onClick={addDiv}>Them</button>
          {
            this.state.mang.map(function(note, index){
              return <Note key={index} id={index}>{note}</Note>
            })
          }
    </div>
    );
  },
  componentDidMount(){
    var that = this;
    $.post("/getNotes",function(data){
      that.setState({mang: data});
    });
  }
});

var Note = React.createClass({
  save(){
    var note = this;
      $.post("/update",{idSua: this.props.id, noiDung: this.refs.txt.value },function(data){
          list.setState({mang:data});
          note.setState({onEdit: false})
      });
  },
  cancel(){
    this.setState({onEdit: false});
  },
  onEdit(){
    this.setState({onEdit: true});
  },
  getInitialState(){
    return{
      onEdit: false
    };
  },
  delete(){
    $.post('/delete',{idXoa: this.props.id},function(data){
        list.setState({mang: data});
    });
  },
  render: function(){
    if(this.state.onEdit == true){
      return(
          <div className="div-note">
            <input ref="txt" defaultValue={this.props.children} />
            <button onClick={this.save}>Luu</button>
            <button onClick={this.cancel}>Huu</button>
          </div>
      );
    }else{
    return(
        <div className="div-note">
          <p>{this.props.children}</p>
          <button onClick={this.delete}>delete</button>
          <button onClick={this.onEdit}>edit</button>
        </div>
    );
  }
  }
});

var InputDiv = React.createClass({
  send(){
    $.post('/add',{note: this.refs.txt.value},function(data){
      list.setState({mang: data})
    });
    ReactDOM.unmountComponentAtNode(document.getElementById('div-add'))
  },
  render(){
    return(
      <div>
        <input type="text" ref="txt" placeholder="enter your note ! "/>
        <button onClick={this.send}>Gui</button>
      </div>
    );
  }
});

ReactDOM.render(
  <div>
    <List />
  </div>,
  document.getElementById('root')
);
