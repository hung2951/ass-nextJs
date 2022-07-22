import { LayoutProps } from '@/models/layout'
import React from 'react'

type Props = {}

const LayoutAdmin = (props: LayoutProps) => {
  return (
    <div>
      <div className='bg-black'>hihi</div>
      {props.children}
    </div>
  )
}

export default LayoutAdmin