import React from 'react';
import { ListGroup, ListGroupItem, Alert } from 'react-bootstrap';

const UnitsList = ({ units }) => (
  units.length > 0 ? <ListGroup className="DocumentsList">
    {units.map(({ _id, themeCN, label }) => (
      <ListGroupItem key={ _id } href={`/units/${label}`}>{ themeCN }</ListGroupItem>
    ))}
  </ListGroup> :
  <Alert bsStyle="warning">没有找到可学习的主题。</Alert>
);

UnitsList.propTypes = {
  units: React.PropTypes.array,
};

export default UnitsList;
