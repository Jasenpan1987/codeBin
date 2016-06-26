import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';

import Accounts from './accounts';
import Bins from '../../imports/collections/bins'
class Header extends Component {

  onBinClick(e){
    e.preventDefault();
    Meteor.call('bins.insert', (err, binId)=>{
      browserHistory.push(`/bin/${binId}`)
    });
  }

  render(){
    return (
      <nav className='nav navbar-default'>
        <div className='navbar-header'>
          <Link to='/' className='navbar-brand'>Mark Bin</Link>
        </div>
        <ul className='nav navbar-nav'>
          <li><Accounts /></li>
          <li><a href='#' onClick={this.onBinClick.bind(this)}>Create Bin</a></li>
        </ul>
      </nav>
    )
  }
}

export default Header;
