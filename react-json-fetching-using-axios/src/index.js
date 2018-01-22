import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class JsonFetch extends React.Component {
  constructor() {
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    axios
      .get(`https://www.reddit.com/r/${this.props.file}.json`)
      .then(res => {
        // console.log("RESPONSE\n",res.data.data.children);
        // console.log(res.data.data.children.map(o=>o.data));
        const posts = res.data.data.children.map(obj => obj.data);
        // console.log(posts);
        this.setState({ posts });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <h1>{this.props.file}</h1>
        <ul>
          {this.state.posts.map(post =>
            <li key={post.id}>{post.title}</li>
          )}
        </ul>
      </div>
    );
  }
}

ReactDOM.render(
  <JsonFetch file="reactjs" />,
  document.getElementById('root')
);