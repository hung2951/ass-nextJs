import LayoutAdmin from '@/components/layouts/LayoutAdmin'
import useCategory from '@/hooks/category'
import { useProduct } from '@/hooks/product'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

type Props = {}
type Inputs = {
    name: string,
    price: number,
    discount: number,
    quantity: number,
    img: string,
    category: string,
    desc: string
}
const ProductAdd = (props: Props) => {
    const router = useRouter()
    const [image, setImage] = useState('')
    const [loading, setLoading] = useState(false)
    const {register,handleSubmit,formState:{errors}} = useForm<Inputs>()
    const {add} = useProduct()
    const {data:categories} = useCategory()
    // const categories = data.filter((item:any)=>item.status === true)
    const uploadImage = async (e: any) => {
        const files = e.target.files
        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', 'veaztpu6')
        setLoading(true)
        const res = await fetch(
          '	https://api.cloudinary.com/v1_1/ecommercer/image/upload',
          {
            method: 'POST',
            body: data
          }
        )
        const file = await res.json()
    
        setImage(file.url)
        setLoading(false)
    
      }
    const onSubmit:SubmitHandler<Inputs> = data=>{
        add({...data,img:image})
        .then(res=>{
            toast.success("Thêm thành công")
            setTimeout(() => {
                router.push('/admin/product')
            }, 1000);
        })
        .catch(()=>toast.error("Lỗi"))
    }
  return (
    <div>
        <div className="container mt-2">
            <div className='text-center'>Product Add</div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className=" col-span-6 sm:col-span-4 py-[30px] ">
                    <label className="block text-sm font-medium text-gray-700 ">Name</label>
                    <input type="text "{...register('name',{required:true})} className="form-control " id="" placeholder=""/>
                </div>
                {errors?.name && <div className='text-red-600 text-sm'>Không được để trống</div>}
                <div className="col-span-6 sm:col-span-4 pb-[30px] ">
                    <label className="block text-sm font-medium text-gray-700 ">Price</label>
                    <input type="number "{...register('price')} defaultValue={0} className="form-control"/>
                </div>
                <div className="col-span-6 sm:col-span-4 pb-[30px] ">
                    <label className="block text-sm font-medium text-gray-700 ">Discount</label>
                    <input type="number " {...register('discount')}  defaultValue={0}  className="form-control"/>
                </div>
                <div className="col-span-6 sm:col-span-4 pb-[30px] ">
                    <label className="block text-sm font-medium text-gray-700 ">Quantity</label>
                    <input type="number "{...register('quantity',{required:true})} className="form-control"/>
                </div>
                {errors?.quantity && <div className='text-red-600 text-sm'>Không được để trống</div>}
                <div className="col-span-6 sm:col-span-4 pb-[30px] ">
                    <label className="block text-sm font-medium text-gray-700 ">Image</label>
                    <input onChange={uploadImage} type="file" className="form-control " />
                </div>
                {loading ? (
                    <h3>Loading...</h3>
                    ) : (
                    <img src={image} style={{ width: '300px' }} {...register('img')} />
                    )
                }
                <div className="col-span-6 sm:col-span-4 pb-[30px] ">
                    <label className="block text-sm font-medium text-gray-700 ">Category</label>
                    <select className="form-select mb-3" {...register('category',{required:true})}  aria-label="Default select example">
                        <option value="">Chọn danh mục</option>
                        {categories?.map((item:any)=>(
                             <option key={item._id} value={item._id}>{item.name}</option>
                        ))}
                    </select>
                </div>
                {errors?.category && <div className='text-red-600 text-sm'>Không được để trống</div>}
                <div className="col-span-6 sm:col-span-4 ">
                    <label className="block text-sm font-medium text-gray-700 ">Details</label>
                    <div className="mb-6 ">
                        <textarea id="details " {...register('desc',{required:true})} rows={3} className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md p-[20px] "></textarea>
                    </div>
                </div>
                {errors?.desc && <div className='text-red-600 text-sm'>Không được để trống</div>}
                <button className="btn btn-success my-[30px] px-[30px] bg-[#198754] " >Submit</button>
            </form>
        </div>
    </div>
    )
}
ProductAdd.Layout = LayoutAdmin
export default ProductAdd