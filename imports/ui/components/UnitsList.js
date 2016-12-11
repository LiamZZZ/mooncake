import React from 'react';
import { Alert, Row, Col, Thumbnail } from 'react-bootstrap';

export default class UnitsList extends React.Component {
  renderUnits(units) {
    return (
      <Row>
        {units.map(({ link, titleCN, image }) => (
          <Col key={link} xs={4} md={3}>
            <Thumbnail src={`/${image}`} alt={link} href={`/units/${link}`}>
              <h5>{titleCN}</h5>
            </Thumbnail>
          </Col>
        ))}
      </Row>
    );
  }
  renderSubjects(subjects) {
    return (
      <div>
        {subjects.map(({ order, header, titleCN, units }) => (
          <div key={order} className="page-header">
            <h4>{header} {titleCN}</h4>
            {this.renderUnits(units)}
          </div>
        ))}
      </div>
    );
  }
  render() {
    const subjects = this.props.subjects;
    return (
      subjects.length > 0 ? this.renderSubjects(subjects) :
        <Alert bsStyle="warning">没有找到可学习的主题。</Alert>
    );
  }
}

UnitsList.propTypes = {
  subjects: React.PropTypes.array,
};
