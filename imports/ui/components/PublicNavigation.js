import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, NavItem } from 'react-bootstrap';

const PublicNavigation = () => (
  <Nav pullRight>
    <LinkContainer to="units">
      <NavItem eventKey={ 1 } href="/units">全部课程</NavItem>
    </LinkContainer>
    <LinkContainer to="articles">
      <NavItem eventKey={ 2 } href="/articles">全部文章</NavItem>
    </LinkContainer>
    <LinkContainer to="">
      <NavItem eventKey={ 3 } href="#">关注我们</NavItem>
    </LinkContainer>
  </Nav>
);

export default PublicNavigation;
