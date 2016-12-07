import React from 'react';
import $ from 'jquery';
import { Alert, PageHeader, Row, Col, Image, Button } from 'react-bootstrap';
import { Bert } from 'meteor/themeteorchef:bert';
import ImageSlide from '../components/ImageSlide.js';

export default class UnitStudy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      word: '',
      image: '',
      index: 0,
      pop: false,
    };
    this.showSlide = this.showSlide.bind(this);
    this.hideSlide = this.hideSlide.bind(this);
    this.readLine = this.readLine.bind(this);
  }
  showSlide(word, index) {
    if (!word) {
      this.setState({
        pop: true,
      });
    } else {
      this.setState({
        show: true,
        word: word.word,
        image: word.image,
        index,
        pop: false,
      });
    }
  }
  hideSlide() {
    this.setState({
      show: false,
      pop: false,
    });
  }
  readLine(button, audio) {
    const line = new Audio();
    if (line.canPlayType('audio/wav')) {
      line.src = `/${audio}`;
      $(button).children('span.lmc-loading').addClass('lmc-audio-loading');
      line.addEventListener('canplaythrough', () => {
        setTimeout(() => {
          $(button).children('span.lmc-loading').removeClass('lmc-audio-loading');
          $(button).children('span.lmc-loading').addClass('lmc-audio-playing');
          line.play();
        }, 1000);
      }, false);
      line.addEventListener('ended', () => {
        $(button).children('span.lmc-loading').removeClass('lmc-audio-loading lmc-audio-playing');
      }, false);
      line.addEventListener('error', () => {
        $(button).children('span.lmc-loading').removeClass('lmc-audio-loading lmc-audio-playing');
        Bert.alert('Something wrong with the network !', 'danger');
      }, false);
    }
  }
  render() {
    const { unit } = this.props;
    return (
      <div>
        <PageHeader>{ unit.themeCN } <small>{ unit.themeEN }</small></PageHeader>
        <Row>
          <Col xsHidden sm={4} >广告 | 信息栏</Col>
          <Col xs={12} sm={8} lg={6}>
            <div>
              <p>单词：</p>
              {unit.words.length > 0 ?
                unit.words.map(({ _id, word, meaning, thumb, image, audio }, index) => (
                  <Row key={ _id } className="lmc-row">
                    <Col xs={10}>
                      <Row
                        className="lmc-panel"
                        onClick={() => this.showSlide({ word, image, audio }, index)}
                      >
                        <Col xs={6}>
                          <h2 className="lmc-header">{word}</h2>
                          <p className="lmc-hide lmc-subheader">{meaning}</p>
                        </Col>
                        <Col xs={6}>
                          <Image
                            src={`/${thumb}`}
                            alt={word}
                            rounded
                            className="lmc-thumb"
                          />
                        </Col>
                      </Row>
                    </Col>
                    <Col xs={2} style={{ paddingTop: '28px' }}>
                      <Button
                        bsSize="large"
                        onClick={event => this.readLine(event.currentTarget, audio)}
                      >🗣 <span className="lmc-loading"></span>
                      </Button>
                    </Col>
                  </Row>
                )) :
                <Alert bsStyle="warning">没有找到可学习的单词。</Alert>}
            </div>
            <div>
              <p>句型：</p>
              {unit.sentences.length > 0 ?
                unit.sentences.map(({ _id, sentence, meaning, audio }) => (
                  <Row
                    key={ _id }
                    className="lmc-row lmc-panel"
                    onClick={event => this.readLine(event.currentTarget, audio)}
                  >
                    <span className="lmc-header">
                      {sentence}
                    </span>
                    <span className="lmc-hide lmc-subheader">
                      {meaning}
                    </span>
                    <span className="lmc-loading"></span>
                  </Row>
                )) :
                <Alert bsStyle="warning">没有找到可学习的句型。</Alert>}
            </div>
          </Col>
        </Row>
        <ImageSlide
          onShow={this.state.show}
          onHide={this.hideSlide}
          image={this.state.image}
          onRead={() => this.readLine($('#lmc-hero'), unit.words[this.state.index].audio)}
          onNext={() => this.showSlide(unit.words[this.state.index + 1], this.state.index + 1)}
          onPrev={() => this.showSlide(unit.words[this.state.index - 1], this.state.index - 1)}
          onPop={this.state.pop}
        />
      </div>
    );
  }
}

UnitStudy.propTypes = {
  unit: React.PropTypes.object,
};

