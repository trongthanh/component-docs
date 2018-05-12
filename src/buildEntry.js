/* @flow */

import path from 'path';

export default function buildEntry({
  layout,
  styles,
}: {
  layout: string,
  styles?: string[],
}) {
  return `
import React from 'react';
import ReactDOM from 'react-dom';
import RedBox from 'redbox-react';
import App from '${require.resolve('./templates/App')}';
import Layout from '${layout}';
import data from './app.data';
import '${path.resolve(__dirname, './styles/reset.css')}';
import '${path.resolve(__dirname, './styles/globals.css')}';

${
    styles
      ? styles
          .map(sheet => `import '${path.resolve(__dirname, sheet)}';`)
          .join('\n')
      : ''
  }

const root = document.getElementById('root');
const render = () => {
  try {
    ReactDOM.hydrate(
      <App
        name={window.__INITIAL_PATH__}
        data={data}
        layout={Layout}
      />,
      root
    );
  } catch (e) {
    ReactDOM.render(
      <RedBox error={e} />,
      root
    );
  }
};

if (module.hot) {
  module.hot.accept(() => {
    render();
  });
}

render();
`;
}
