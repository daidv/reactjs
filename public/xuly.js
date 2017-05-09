var KhoaPham = React.createClass({
  render: function(){
    return(
      <div>
        <h1 className="mauvang"> { this.props.ten } - {this.props.giangvien} - {this.props.children} </h1>
        <KhoaHoc />
      </div>
    );
  }
});

var KhoaHoc = React.createClass({
  render: function(){
    return(
      <h3>Lap trinh Reactjs</h3>
    );
  }
});

ReactDOM.render(
  <div>
    <KhoaPham ten="ReactJS" giangvien="Mr.Khoa">Mon hoc React</KhoaPham>
    <KhoaPham ten="NodeJS" giangvien="Mr.Pho">Mon hoc NodeJS</KhoaPham>

  </div>
  , document.getElementById("root"));
