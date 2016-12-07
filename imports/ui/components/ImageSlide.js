import React from 'react';
import { Bert } from 'meteor/themeteorchef:bert';
import { Modal, Button } from 'react-bootstrap';

export default class ImageSlide extends React.Component {
  render() {
    /* 保证图像浏览的用户体验：
      var bgImage = {
        backgroundImage: 'url(/' + loadingIndicatorImage + ')',
      };
      var image = new Image(this.props.image);
      image.onLoad(
        bgImage = {
          backgroundImage: 'url(/' + this.props.image + ')',
        };
      );
    */
    const bgImage = {
      backgroundImage: 'url(/' + this.props.image + ')',
    };
    const warningMsg = 'No more pictures 😅';
    if (this.props.onPop) Bert.alert(warningMsg, 'warning');
    return (
      <Modal
        show={this.props.onShow}
        onHide={this.props.onHide}
        dialogClassName="custom-modal"
      >
        <div
          id="lmc-hero"
          className="lmc-fullScreenHolder"
          style={bgImage}
          onClick={this.props.onRead}
        >
          <span className="lmc-loading"></span>
        </div>
        <Modal.Footer>
          <Button onClick={this.props.onPrev}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40px"
              height="40px"
              viewBox="0 0 283.46 283.46"
            >
              <g fill="#f1f2f2">
                <rect
                  x="127.35"
                  y="-26.44"
                  width="28.35"
                  height="208.76"
                  rx="14.17"
                  ry="14.17"
                  transform="translate(187.02 233.35) rotate(-135)"
                />
                <rect
                  x="127.46"
                  y="100.88"
                  width="28.35"
                  height="209.06"
                  rx="14.17" ry="14.17"
                  transform="translate(-103.74 160.38) rotate(-45)"
                />
              </g>
            </svg>
          </Button>
          <Button onClick={this.props.onNext}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40px"
              height="40px"
              viewBox="0 0 283.46 283.46"
            >
              <g fill="#f1f2f2">
                <rect
                  x="127.35"
                  y="-26.44"
                  width="28.35"
                  height="208.76"
                  rx="14.17"
                  ry="14.17"
                  transform="translate(-13.66 122.9) rotate(-45)"
                />
                <rect
                  x="127.46"
                  y="100.88"
                  width="28.35"
                  height="209.06"
                  rx="14.17" ry="14.17"
                  transform="translate(96.53 450.81) rotate(-135)"
                />
              </g>
            </svg>
          </Button>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
ImageSlide.propTypes = {
  onShow: React.PropTypes.bool,
  onHide: React.PropTypes.func,
  image: React.PropTypes.string,
  onRead: React.PropTypes.func,
  onNext: React.PropTypes.func,
  onPrev: React.PropTypes.func,
  onPop: React.PropTypes.bool,
};
