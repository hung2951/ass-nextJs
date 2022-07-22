import { LayoutProps } from '@/models/layout'
import React from 'react'

type Props = {}

const LayoutClient = (props: LayoutProps) => {
  return (
    <div>
      client
      {props.children}
    </div>
  )
}

export default LayoutClient