import React from 'react';
import { Thumbnail } from 'react-bootstrap';

export default class Propaganda extends React.Component {
  renderIndexPropaganda(propaganda) {
    return (
      <Thumbnail
        href={propaganda.link}
        alt={propaganda.image}
        src={`/${propaganda.image}`}
        style={{ width: '100%' }}
        className="lmc-propaganda"
        target="_blank"
      />
    );
  }
  renderOtherPropaganda(propaganda) {
    return (
      <Thumbnail
        href={propaganda.link}
        alt={propaganda.image}
        src={`/${propaganda.image}`}
        style={{ width: '50%' }}
        className="center-block lmc-propaganda"
        target="_blank"
      />
    );
  }
  render() {
    const propaganda = this.props.propaganda;
    return (
      propaganda.type === 'index' ? this.renderIndexPropaganda(propaganda) :
        this.renderOtherPropaganda(propaganda)
    );
  }
}

Propaganda.propTypes = {
  propaganda: React.PropTypes.object,
};
