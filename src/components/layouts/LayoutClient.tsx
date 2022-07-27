import { LayoutProps } from '@/models/layout'
import React from 'react'
import Bottom from '../client/bottom'
import Header from '../client/header'



type Props = {}

const LayoutClient = (props: LayoutProps) => {
  return (
    <>
      <div className="">
        <Header />

        <div>
          {props.children}
        </div>
        <Bottom />

      </div>
    </>

  )
}

export default LayoutClient