import React from 'react';
import { Alert, Label } from 'react-bootstrap';

export default class ArticlesList extends React.Component {
  renderArticles(articles) {
    return (
      <div>
        {articles.map(({ title, author, time, cate, link }) => (
          <blockquote key={time}>
            <a href={link} target="_blank">
              <p><Label>{cate}</Label>&emsp;&emsp;{title}</p>
              <footer>{author}&emsp;&emsp;<cite title="Time">{time}</cite></footer>
            </a>
          </blockquote>
        ))}
      </div>
    );
  }
  render() {
    const articles = this.props.articles;
    return (
      articles.length > 0 ? this.renderArticles(articles) :
        <Alert bsStyle="warning">没有找到文章。</Alert>
    );
  }
}

ArticlesList.propTypes = {
  articles: React.PropTypes.array,
};
