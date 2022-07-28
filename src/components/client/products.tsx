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
                            <div className=" w-[66%]  m-auto ">
                                <Link href={"./products/123456"}>
                                    <div>
                                        {/* <img src="https://image.made-in-china.com/202f0j00KZUiGpwMLhos/M9-Plus-7-0inch-12g-512g-24MP-Cheap-Smart-Phones-4G-Mobile-Android-Cell-Phones-Lowest-Price-Mobail-Phone.webp" height="100px" /> */}
                                        <img src={item.img} height="100px" />

                                    </div>
                                </Link>
                            </div>
                            <div className="py-[10px] px-[10px] leading-8">
                                <Link href={"./products/123456"} className="no-underline">
                                    <button className="no-underline text-blue-600 visited:text-purple-600 hover:text-red-500">{item.name}</button>
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