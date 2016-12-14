import React from 'react';
// import { Table } from 'react-bootstrap';
import $ from 'jquery';
import { Bert } from 'meteor/themeteorchef:bert';

export default class Words extends React.Component {
  voiceUp(target, voice) {
    const loader = $(target).find('span.lmc-loading');
    const audio = new Audio();
    if (audio.canPlayType('audio/wav')) {
      audio.src = `/${voice}`;
      loader.addClass('lmc-audio-loading');
      audio.addEventListener('canplaythrough', () => {
        setTimeout(() => {
          loader.removeClass('lmc-audio-loading');
          loader.addClass('lmc-audio-playing');
          audio.play();
        }, 1000);
      }, false);
      audio.addEventListener('ended', () => {
        loader.removeClass('lmc-audio-loading lmc-audio-playing');
      }, false);
      audio.addEventListener('error', () => {
        loader.removeClass('lmc-audio-loading lmc-audio-playing');
        Bert.alert('Something wrong with the network !', 'danger');
      }, false);
    }
  }
  render() {
    const words = this.props.data;
    return (
      <ul className="list-inline">
        {
          words.map(({ word, meaning, thumb, image, voice }, index) => (
            <li
              key={index}
              className="lmc-image-list lmc-hover-item lmc-padding-md"
              onClick={event => this.voiceUp(event.currentTarget, voice)}
            >
              <img src={`/${thumb}`} alt={word} style={{ width: '100%' }} className=""/>
              <h4 className="lmc-hover-word lmc-padding-md">
                <p>{word}&emsp;&emsp;<span className="lmc-loading"></span></p>
                <small>{meaning}</small>
              </h4>
            </li>
          ))
        }
      </ul>
    );
  }
}

Words.propTypes = {
  data: React.PropTypes.array,
};
