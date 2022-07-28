import useCategory from '@/hooks/category'
import Link from 'next/link'
import React from 'react'

type Props = {}

const Category = (props: Props) => {
    const { data, error } = useCategory()
    console.log(data);

    if (!data) return <div>Loading...</div>
    if (error) return <div>Failed to loading</div>
    return (
        <div className='mr-5'>
            <Link href={'/'}>
                <a className='block h-10 pb-3 pt-3 border-b border-[#ccc] w-40 no-underline text-black hover:w-36 duration-500'>Danh mục</a>
            </Link>

        </div>
    )
}

export default Category