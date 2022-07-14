import React from 'react';
import { NavLink } from 'react-router-dom';


class Header extends React.Component {
  constructor(props){
    super(props);
    this.state={data: new Date() }
    
}

componentDidMount() {
    this.timerID=setInterval(()=> this.tick(),1000);      
    
}

componentWillUnmount(){
    clearInterval(this.timerID);
}

tick(){
    this.setState({data: new Date()})
}


render(){

  return (
    <header>
      <h1>HOSPITAL MANAGEMENT SYSTEM</h1>
      <h6>TODAY'S DATE :</h6> {<h6>{this.state.data.toLocaleDateString()}</h6>}
      <h4>{this.state.data.toLocaleTimeString()}</h4>
      <hr />
      <div className="links">
        <br></br>
        <NavLink to="/add" className="link" activeClassName="active">
          Add PATIENT
        </NavLink>
      </div>
      <h6>@2022</h6>
    </header>
  );
};
}
export default Header;