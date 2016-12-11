import React from 'react';
// import { PageHeader } from 'react-bootstrap';
import UnitsList from '../containers/UnitsList.js';

export default class Units extends React.Component {
  render() {
    return (
      <div className="Units">
        <h4 className="page-header text-center">全部课程</h4>
        <UnitsList />
      </div>
    );
  }
}
