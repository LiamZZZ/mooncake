import React from 'react';
import { Jumbotron, ListGroup, ListGroupItem } from 'react-bootstrap';

const Index = () => (
  <div className="Index">
    <Jumbotron className="text-center">
      <h2>放置 | 宣传图像和标语</h2>
      <p>临时导航列表：</p>
      <ListGroup>
        <ListGroupItem href="/units">所有主题</ListGroupItem>
        <ListGroupItem href="/videos">视频</ListGroupItem>
        <ListGroupItem href="/articles">所有文章</ListGroupItem>
      </ListGroup>
      <p style={ { fontSize: '16px', color: '#aaa' } }>小月饼 儿童英语 2016</p>
    </Jumbotron>
  </div>
);

export default Index;
