import { configure } from '@storybook/react'
import requireContext from 'require-context.macro'

// make CSS available to Storybook
import '../src/index.css'

const req = requireContext('../src/stories', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
