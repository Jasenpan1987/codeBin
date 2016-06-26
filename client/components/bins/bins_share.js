import React, { Component } from 'react';

class BinsShare extends Component {

  onShareClick(){
    const email = this.refs.email.value;
    Meteor.call('bins.share', this.props.bin, email);
  }

  renderShareList(){
    return this.props.bin.sharedWith.map(email => {
      return <button className='btn btn-default' key={email}>{email}</button>
    })
  }

  render(){
    return (
      <footer className='bins-share'>
        <div className='input-group'>
          <input className='form-control' ref='email'/>
          <div className='input-group-btn'>
            <button className='btn btn-default' onClick={this.onShareClick.bind(this)}>
              Share Bin
            </button>
          </div>
        </div>
        <div>
          Shared With:
          <div className='btn-group'>
            {this.renderShareList()}
          </div>
        </div>
      </footer>
    )
  }
}

export default BinsShare;
