import React,{Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

// import { postEevnt } from '../actions'

class EventsNew extends Component{
  render(){
    return(
      <React.Fragment>
      <p>foo</p>
      </React.Fragment>
    )
  }
}
// const mapDispatchToProps = ({ postEvents })


export default connect(null,null)(EventsNew)
