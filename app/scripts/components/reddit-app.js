import React from 'react';
import ArticleList from './article-list';


class RedditApp extends React.Component {
  constructor(props) {
    super(props);

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onLinkChange = this.onLinkChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      articles: [
        { title: "React", link: "https://facebook.github.io/react/index.html" },
        { title: "Facebook", link: "https://facebook.com" }
      ],
      title: "",
      link: ""
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    let newTitle = "";
    let newLink = "";
    let newArticles = this.state.articles.concat({title: this.state.title, link: this.state.link});
    console.log("Adding article with title ", this.state.title, " and link ", this.state.link);

    this.setState({
      articles: newArticles,
      title: newTitle,
      link: newLink
    });
  }

  onTitleChange(e) {
    this.setState({ title: e.target.value });
  }

  onLinkChange(e) {
    this.setState({ link: e.target.value }); 
  }

  render() {
    return (
      <div>
        <section className="new-link">
          <h2 className="page-title">Add New Article</h2>
          <form className="form" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input className="form-control" onChange={this.onTitleChange} value={this.state.title} />
            </div>
            <div className="form-group">
              <label htmlFor="title">Link</label>
              <input className="form-control" onChange={this.onLinkChange} value={this.state.link} />
            </div>
            <div className="form-group">
              <button className="btn btn-primary">Submit</button>
            </div>
          </form>
        </section>
        <hr/>
        <section>
          <ArticleList articles={this.state.articles} />
        </section>
      </div>
    )
  }
}

export default RedditApp
