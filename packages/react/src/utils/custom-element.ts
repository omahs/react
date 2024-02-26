import React from 'react'
import styled from 'styled-components'
import {createComponent as create} from '@lit-labs/react'
import sx from '../sx'

export const createComponent = (elementClass: Constructor<HTMLElement>, tagName: string, events = {}) =>
  styled(
    create({
      tagName,
      elementClass,
      react: React,
      events,
    }),
  )(sx)

export default createComponent
