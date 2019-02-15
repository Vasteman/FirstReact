import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import ArticleList from './my/components/ArticleList';
import {articles} from './my/fixtures';

ReactDOM.render(<ArticleList articles={articles}/>, document.getElementById('root'));
