import React from 'react';
import RedditApp from './components/reddit-app';

window.React = React;
const mountNode = document.getElementById('app');

React.render(<RedditApp title="" link="" />, mountNode);
