
import { LayoutProps } from '@/models/layout'
import Link from 'next/link'
import React from 'react'
import HeaderAdmin from '../admin/HeaderAdmin'
import Navbar from '../admin/Navbar'

type Props = {}

const LayoutAdmin = (props: LayoutProps) => {
  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900" >

      <Navbar />
      <div className="flex flex-col flex-1 w-full">
        <HeaderAdmin />

        <main className="h-full overflow-y-auto">
          <div className="container px-6 mx-auto grid">
            <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
              {props.children}
            </h2>
          </div>
        </main>
      </div>
    </div>
  )
}

export default LayoutAdmin