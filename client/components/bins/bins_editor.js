import React, { Component } from 'react';
import CodeMirror from 'react-codemirror';
import 'codemirror/mode/markdown/markdown';

import Bin from '../../../imports/collections/bins';

class BinsEditor extends Component {

  handleOnChangeEditor(content){
    //console.log(content)
    Meteor.call('bins.update', this.props.bin._id, content)
  }

  render(){
    //console.log(this.props.bin)
    return (
      <div className='col-xs-8'>
        <h5>Input Here:</h5>
        <CodeMirror
          value={this.props.bin.content}
          options={{mode:'markdown', lineNumbers: true}}
          onChange={this.handleOnChangeEditor.bind(this)}/>
      </div>
    )
  }
}

export default BinsEditor;
