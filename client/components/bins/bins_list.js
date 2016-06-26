import React, { Component } from 'react';
import { Link } from 'react-router';
import { createContainer } from 'meteor/react-meteor-data';
import { Bins } from '../../../imports/collections/bins';

class BinsList extends Component {

  onBinRemove(binId){
    Meteor.call('bins.remove', binId);
  }

  renderList(){
    return this.props.bins.map(bin => {
      return (
        <li className='list-group-item' key={bin._id}>
          <Link to={`/bin/${bin._id}`}> Bin: {bin._id} </Link>
          <span className='pull-right'>
            <button className='btn btn-danger' onClick={()=>this.onBinRemove(bin._id)}>Delete</button>
          </span>
        </li>
      )
    })
  }

  render(){
    console.log(this.props.bins);
    return (
      <ul className='list-group'>
        {this.renderList()}
      </ul>
    )
  }
}

export default createContainer(()=>{
  Meteor.subscribe('bins');
  Meteor.subscribe('sharedBins')
  return { bins: Bins.find({}).fetch()}
}, BinsList);
