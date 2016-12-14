import React from 'react';
// import $ from 'jquery';
// import { Alert, PageHeader, Row, Col, Image, Button } from 'react-bootstrap';
// import { Bert } from 'meteor/themeteorchef:bert';
// import ImageSlide from '../components/ImageSlide.js';
import Sentences from '../components/Sentences.js';
import Words from '../components/Words.js';
import Signlangs from '../components/Signlangs.js';

export default class UnitStudy extends React.Component {
  render() {
    const { unit } = this.props;
    return (
      <div className="UnitStudy">
        <h3 className="page-header">
          <small>正在学习：</small>{ unit.titleCN }<small>&emsp;{ unit.titleEN }</small>
        </h3>
        <div className="lmc-flex-container">
          <div className="lmc-propaganda">广告 | 信息</div>
          <div className="">
            <p>使用句型：</p>
            <Sentences data={unit.sentences} />
            <p>目标单词：</p>
            <Words data={unit.words} />
            <p>辅助手语：</p>
            <Signlangs data={unit.signlangs} />
          </div>
        </div>
      </div>
    );
  }
}

UnitStudy.propTypes = {
  unit: React.PropTypes.object,
};

