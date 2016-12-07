import React from 'react';
import { Row, Col, Button, ButtonGroup } from 'react-bootstrap';
import UnitsList from '../containers/UnitsList.js';

const ShowUnits = () => (
  <div className="Documents">
    <Row>
      <Col xs={ 12 }>
        <div className="page-header clearfix">
          <h4 className="pull-left">学习主题</h4>
          <ButtonGroup className="pull-right">
            <Button bsStyle="primary" href="#" active>最新</Button>
            <Button href="#">推荐顺序</Button>
          </ButtonGroup>
        </div>
        <UnitsList />
      </Col>
    </Row>
  </div>
);

export default ShowUnits;
