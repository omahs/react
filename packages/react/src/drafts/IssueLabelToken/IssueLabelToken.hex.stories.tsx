import React from 'react'
import IssueLabelToken from './IssueLabelToken'
import Box from '../../Box'
import {hexString} from '../utils/isHex'

export default {
  title: 'Drafts/Components/IssueLabelToken/Hex',
  component: IssueLabelToken,
}

export const Hex = ({hex, text, interactive, ...args}: {hex: hexString; interactive: boolean; text: string}) => {
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
      <IssueLabelToken
        {...args}
        size={'medium'}
        text={text}
        fillColor={hex}
        onClick={interactive ? () => {} : undefined}
      />
    </Box>
  )
}
Hex.args = {
  hex: '#59B200',
  text: 'New Token',
  variant: undefined,
  interactive: true,
}
Hex.argTypes = {
  hex: {control: {type: 'color'}},
  variant: {control: {disable: true}},
  interactive: {control: {type: 'boolean'}},
}
