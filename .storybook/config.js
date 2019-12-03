import { configure, addParameters } from '@storybook/react'
import requireContext from 'require-context.macro'
import 'storybook-chromatic'

// make CSS available to Storybook
import '../src/index.css'

addParameters({
  assets: [
    {
      name: 'app',
      url: '/designs/app.png',
    },
    {
      name: 'items',
      url: '/designs/items.png',
    },
    {
      name: 'list 1',
      url: '/designs/list-1.png',
    },
    {
      name: 'list 2',
      url: '/designs/list-2.png',
    },
  ],
})

const req = requireContext('../src/stories', true, /\.stories\.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
