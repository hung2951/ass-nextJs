import { LayoutProps } from '@/models/layout'
import React from 'react'

type Props = {}

const LayoutAdmin = (props: LayoutProps) => {
  return (
    <div className='bg-red-700'>
      admin
      {props.children}
    </div>
  )
}

export default LayoutAdmin