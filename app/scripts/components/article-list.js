import React from 'react';
import RedditArticle from './reddit-article';

class ArticleList extends React.Component {
  constructor(props) {
    super(props);
    this.renderArticle = this.renderArticle.bind(this);
  }

  renderArticle(article, index) {
    return <RedditArticle title={article.title} link={article.link} key={index} />
  }

  render() {
    return (
      <ul className="list-group">
        { this.props.articles.map(this.renderArticle) }
      </ul>
    )
  }
}

export default ArticleList
