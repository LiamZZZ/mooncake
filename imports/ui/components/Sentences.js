import React from 'react';
// import { } from 'react-bootstrap';
import $ from 'jquery';
import { Bert } from 'meteor/themeteorchef:bert';

const bullet = ['bg-success', 'bg-info', 'bg-primary', 'bg-warning', 'bg-danger'];

export default class Sentences extends React.Component {
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
    const sentences = this.props.data;
    return (
      <ul className="list-unstyled">
        {sentences.map(({ sentence, meaning, voice }, index) => (
          <li
            key={index}
            className="lmc-hover-item lmc-padding-md"
            onClick={event => this.voiceUp(event.currentTarget, voice)}
          >
            <span className={`lmc-dot-bullet ${bullet[index]}`}></span>
            <h4 className="lmc-inline">
              {sentence}&emsp;&emsp;
              <small>{meaning}</small>&emsp;&emsp;
              <span className="lmc-loading"></span>
            </h4>
          </li>
        ))}
      </ul>
    );
  }
}

Sentences.propTypes = {
  data: React.PropTypes.array,
};
