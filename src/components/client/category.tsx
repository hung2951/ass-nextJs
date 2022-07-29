import useCategory from '@/hooks/category'
import Link from 'next/link'
import React from 'react'

type Props = {}

const Category = (props: Props) => {
    const { data, error } = useCategory()
    // const dataNew = data.filter((item:any)=>item.status == true)
    if (!data) return <div>Loading...</div>
    if (error) return <div>Failed to loading</div>
    return (
        <div className='mr-5'>
            {data.map((item: any) => (
                <div key={item._id} >
                    <Link href={'/'}>
                        <a className='block h-10 pb-3 pt-3 border-b border-[#ccc] no-underline w-48 text-black hover:w-36 hover:duration-700'>{item.name}</a>
                    </Link>
                </div>

            ))}


        </div>
    )
}

export default Category