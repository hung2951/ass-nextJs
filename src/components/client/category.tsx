import Link from 'next/link'
import React from 'react'

type Props = {}

const Category = (props: Props) => {
    return (
        <div className='mr-5'>
            <Link href={'/'}>
                <a className='block h-10 pb-3 pt-3 border-b border-[#ccc] w-40 no-underline text-black hover:w-36 duration-150'>Danh mục</a>
            </Link>
            <Link href={'/'}>
                <a className='block h-10 pb-3 pt-3 border-b border-[#ccc] w-40 no-underline text-black hover:w-36 duration-150'>Danh mục</a>
            </Link>
        </div>
    )
}

export default Category