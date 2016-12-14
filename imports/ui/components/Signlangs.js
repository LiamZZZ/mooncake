import React from 'react';
// import { Glyphicon } from 'react-bootstrap';
import $ from 'jquery';


export default class Signlangs extends React.Component {
  playVideo(target) {
    const video = target.firstElementChild;
    const cover = target.lastElementChild;
    $(cover).hide();
    video.play();
    video.addEventListener('ended', () => {
      $(cover).show();
    });
  }
  render() {
    const signlangs = this.props.data;
    return (
      <ul className="list-inline">
        {
          signlangs.map(({ lang, thumb, demo }, index) => (
            <li
              key={index}
              className="lmc-hover-item lmc-image-list"
              onClick={event => this.playVideo(event.currentTarget)}
            >
              <video src={`/${demo}`} style={{ width: '100%' }} preload="metadata" onClick={event => event.target.play()}>
                dont support!
              </video>
              <div
                style={{ width: '80%', height: '2em' }}
                className="text-center lmc-cover lmc-center"
              >
                {lang}
              </div>
            </li>
          ))
        }
      </ul>
    );
  }
}

Signlangs.propTypes = {
  data: React.PropTypes.array,
};
