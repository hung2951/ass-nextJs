import { useProduct } from '@/hooks/product'
import Link from 'next/link'
import React from 'react'

type Props = {}

const Productsclient = (props: Props) => {
    const { data, error } = useProduct()
    console.log(data);

    if (!data) return <div>Loading...</div>
    if (error) return <div>Failed to loading</div>
    return (
        <div className="conten my-[20px]">
            <h1 className="font-bold text-[20px] py-[20px]">New Arrivals</h1>
            <div className="product grid grid-cols-4 gap-5 ">
                {data.map((item: any) => (
                    <form action="" key={item._id}>
                        <div className=" khoiy border-solid border-2 border-[#f3f3f3] rounded-lg " >
                            <div className="product-img w-[66%] m-auto">
                                <Link href={`/products/${item._id}`}>
                                    <div className='pt-3'>
                                        <img src={item.img} height="100px" />
                                        <div className='img2'>
                                        <img src="https://vnn-imgs-f.vgcloud.vn/2019/08/07/23/apple-tiep-tuc-thong-tri-thi-truong-may-tinh-bang.jpg" />
                                    </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="py-[10px] px-[10px] leading-8 text-center">
                                <Link href={`/products/${item._id}`} className="no-underline ">
                                    <button className="no-underline mx-auto text-blue-600 visited:text-purple-600 hover:text-red-500">{item.name}</button>
                                </Link>
                                <p className="text-[15px] text-[red]">{item.price}</p>
                                <p>130,000,000 lượt xem</p>
                            </div>
                            <div className="conten-item ">
                                <button>Add to cart</button>
                            </div>
                        </div>
                    </form>
                ))}



            </div>
        </div>
    )
}

export default Productsclient 