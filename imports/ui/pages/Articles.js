import React from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import ArticlesList from '../containers/ArticlesList.js';
import Propaganda from '../containers/Propaganda.js';

export default class Articles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cate: 0,
    };
  }
  render() {
    return (
      <div className="Articles">
        <Propaganda type="article"/>
        <div className="page-header clearfix">
          <h4 className="pull-left  ">全部文章</h4>
          <div className="pull-right">
            <DropdownButton
              title="类别"
              id="lmc-dropdown-cate"
              onSelect={eventKey => this.setState({ cate: eventKey })}
            >
              <MenuItem eventKey="0">全部</MenuItem>
              <MenuItem eventKey="1">杂谈</MenuItem>
              <MenuItem eventKey="2">建议</MenuItem>
            </DropdownButton>
          </div>
        </div>
        <ArticlesList cate={this.state.cate}/>
      </div>
    );
  }
}
