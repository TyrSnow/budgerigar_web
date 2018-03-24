import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';

/** 引入初始化代码 */
import './start/sync.storage';
import './start/config.axios';

/** 引入start */
ReactDOM.render(
  (
    <div>
      <App />
      <a
        href="https://github.com/TyrSnow/budgerigar_api"
        target="_blank"
        className="forkLink"
      >
        Fork me on github.
      </a>
    </div>
  ),
  document.getElementById('root') as HTMLElement
);
