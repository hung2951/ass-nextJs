import { LayoutProps } from '@/models/layout'
import React from 'react'

type Props = {}

const LayoutAdmin = (props: LayoutProps) => {
  return (
    <div>
      admin
      {props.children}
    </div>
  )
}

export default LayoutAdmin