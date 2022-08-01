import Banner from '@/components/client/banner';
import Category from '@/components/client/category';
import Post from '@/components/client/post';
import Productsclient from '@/components/client/products';
import useCategory from '@/hooks/category'
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import useSWR from 'swr';

type Props = {}

const SearchCategory = (props: Props) => {
    
    const router = useRouter();
    const { id } = router.query;
    const { data, error } = useSWR(id ? `/productbycategory/${id}` : null )
  
    if(!data)  return <div>loading...</div>
    if(error) return <div>eroood</div> 
 
    
   
      
  
  return (
    <div className="">
    <article className="mx-auto w-[1200px] ">
      <div className="container">
        <div className="flex justify-between">
          <div>
            <Category />
          </div>
          <div className="banner bg-[white] w-[950px] scroll-mb-[10px]">
            <Banner />
          </div>
        </div>
        <article className=" mx-auto w-[1200px] ">
          {/*  */}
          <div>
          <div className="conten my-[20px]">
            <p className="font-bold text-[20px] text-center text-2xl">Sản phẩm theo {data.category.name}</p>
            <div className="product grid grid-cols-4 gap-5 ">
                {data.product.map((item: any) => (
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
                                <Link href={"./products/123456"} className="no-underline ">
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
          </div>
        </article>
       
      

      </div>
    </article >

  </div>
  )
}

export default SearchCategory