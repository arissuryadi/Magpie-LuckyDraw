import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom'
import './start.css';

class Start extends Component {
  render() {
    return (
      <div><Link to="/activity-setting" className="creat_new_activity">Buat Undian</Link></div>
    );
  }
}

export default Start;
