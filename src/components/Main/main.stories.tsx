import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import Main from '.'

export default {
  title: 'Components/Main',
  component: Main
} as Meta

const Template: StoryFn = (args) => <Main {...args} />

export const Default: StoryFn = Template.bind({})
Default.args = {}
