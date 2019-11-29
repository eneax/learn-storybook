import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, object } from '@storybook/addon-knobs/react'

import Task from '../components/Task'

export const task = {
  id: '1',
  title: 'Test Task',
  state: 'TASK_INBOX',
  updatedAt: new Date(2018, 0, 1, 9, 0),
}

export const actions = {
  onArchiveTask: action('onArchiveTask'),
  onPinTask: action('onPinTask'),
}

storiesOf('Task', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    return <Task task={object('task', { ...task })} {...actions} />
  })
  .add('pinned', () => <Task task={{ ...task, state: 'TASK_PINNED' }} {...actions} />)
  .add('archived', () => <Task task={{ ...task, state: 'TASK_ARCHIVED' }} {...actions} />)



/*
Storybook has 2 levels of organization: the component itself and its child stories.
Each story is a variation of a component and you can have as many stories per component as you need.

To initiate Storybook we first call the `storiesOf()` function to register the component.
We add a display name for the component (i.e. 'default', 'pinned', 'archived')

To define our stories, we call `.add()` once for each of our test states to generate a story.
*/
