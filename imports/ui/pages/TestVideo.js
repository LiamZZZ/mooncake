import React from 'react';
import { Row, Col } from 'react-bootstrap';

const testVideo = '<embed height="415" width="544" quality="high" allowfullscreen="true" type="application/x-shockwave-flash" src="http://static.hdslb.com/miniloader.swf" default-src="self" flashvars="aid=7388155&page=1" pluginspage="http://www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash"></embed>';
const TestVideo = () => (
  <div className="Documents">
    <Row>
      <Col xs={ 12 }>
        <div>
          <div style={{ width: 660, height: 'auto' }} dangerouslySetInnerHTML={{ __html: testVideo }}>
          </div>
        </div>
      </Col>
    </Row>
  </div>
);

export default TestVideo;
