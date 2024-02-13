import React from 'react'
import IssueLabelToken from './IssueLabelToken'
import Box from '../../Box'
import {action} from '@storybook/addon-actions'
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
  title: 'Drafts/Components/IssueLabelToken/Interactive',
  component: IssueLabelToken,
}

export const Interactive: StoryObj = ({variant}: {variant: Variant}) => {
  return (
    <Box
      sx={{
        alignItems: 'start',
        gap: 2,
        display: 'flex',
        flexWrap: 'wrap',
        overflow: 'hidden',
        padding: 2,
      }}
    >
      <IssueLabelToken
        as="a"
        href="/?path=/story/components-newtoken--interactive-token"
        variant={variant}
        size={'medium'}
        text="Link"
      />
      <IssueLabelToken as="button" onClick={action('clicked')} variant={variant} size={'medium'} text="Button" />
      <IssueLabelToken
        as="span"
        tabIndex={0}
        onFocus={action('focused')}
        variant={variant}
        size={'medium'}
        text="Focusable Span"
      />
      <IssueLabelToken
        as="button"
        size={'medium'}
        text="Removable Button"
        variant={variant}
        onRemove={action('remove clicked')}
        onClick={action('button clicked')}
      />
    </Box>
  )
}

Interactive.args = {
  variant: variants[0],
}
Interactive.argTypes = {
  variant: {
    control: {
      type: 'select',
    },
    options: [...variants, undefined],
  },
}
