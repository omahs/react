import React from 'react'
import IssueLabelToken from './IssueLabelToken'
import Box from '../../Box'
import {StoryObj} from '@storybook/react'

const variants = [
  'pink',
  'plum',
  'purple',
  'indigo',
  'blue',
  'cyan',
  'teal',
  'pine',
  'green',
  'lime',
  'olive',
  'lemon',
  'yellow',
  'orange',
  'amber',
  'red',
  'coral',
  'gray',
  'brown',
  'auburn',
] as const

type Variants = typeof variants
type Variant = Variants[number]

export default {
  title: 'Drafts/Components/IssueLabelToken',
  component: IssueLabelToken,
  args: {
    text: 'Token',
    variant: 'blue',
  },
  argTypes: {
    variant: {
      control: {
        type: 'select',
      },
      options: [...variants, undefined],
    },
  },
}

export const Default: StoryObj = ({variant, text, ...args}: {variant: Variant; text: string}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 2,
        overflow: 'hidden',
        padding: 2,
      }}
    >
      <IssueLabelToken {...args} size={'medium'} text={text} variant={variant} />
    </Box>
  )
}
Default.args = {
  variant: variants[0],
  text: 'Issue Label',
}
