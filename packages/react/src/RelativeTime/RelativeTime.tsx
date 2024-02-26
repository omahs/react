import React from 'react'
import {RelativeTimeElement} from '@github/relative-time-element'
import createComponent from '../utils/custom-element'
import type {ComponentProps} from '../utils/types'

const RelativeTimeComponent = createComponent(RelativeTimeElement, 'relative-time')

export type RelativeTimeProps = ComponentProps<typeof RelativeTimeComponent>

const localeOptions: Intl.DateTimeFormatOptions = {month: 'short', day: 'numeric', year: 'numeric'}
function RelativeTime({date, ...props}: RelativeTimeProps) {
  return (
    <RelativeTimeComponent {...props} date={date}>
      ${date?.toLocaleDateString('en', localeOptions) || ''}
    </RelativeTimeComponent>
  )
}

export default RelativeTime
