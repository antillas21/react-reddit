import React from 'react';

class RedditArticle extends React.Component {
  constructor(props) {
    super(props);

    this.voteUp = this.voteUp.bind(this);
    this.voteDown = this.voteDown.bind(this);
    this.domain = this.domain.bind(this);

    this.state = { votes: 0 };
  }
  voteUp() {
    this.setState({ votes: this.state.votes + 1 });
  }

  voteDown() {
    this.setState({ votes: this.state.votes - 1 });
  }

  domain() {
    let link = this.props.link.split("//")[1];
    return link.split("/")[0];
  }

  render() {
    return (
      <li className="list-group-item">
        <span className="badge votes">{this.state.votes}</span>
        <div>
          <div className="col-sm-6">
            <h3><a href={this.props.link}>{this.props.title}</a></h3>
            <span>({this.domain()})</span>
          </div>
          <div className="col-sm-6">
            <div className="btn-group btn-group-sm" role="group" aria-label="voting">
              <button type="button" className="btn btn-success" onClick={this.voteUp}>Upvote</button>
              <button type="button" className="btn btn-danger" onClick={this.voteDown}>Downvote</button>
            </div>
          </div>
          <div className="clearfix"></div>
        </div>
      </li>
    )
  }
}

export default RedditArticle
