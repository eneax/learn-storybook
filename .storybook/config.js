import { configure } from '@storybook/react';
// make CSS available to Storybook
import '../src/index.css';

// By default Storybook looks for stories in a /stories directory.
// In this project, we want Storybook to look for stories inside /src directory
const req = require.context('../src', true, /\.stories.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);