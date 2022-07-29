import LayoutAdmin from '@/components/layouts/LayoutAdmin'
import useCategory from '@/hooks/category'
import { useProduct } from '@/hooks/product'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

type Props = {}
type Inputs = {
    name:string,
    price:number,
    discount:number,
    quantity:number,
    img:string,
    category:string,
    desc:string
}
const ProductAdd = (props: Props) => {
    const {register,handleSubmit,formState:{errors}} = useForm<Inputs>()
    const {add} = useProduct()
    const {data} = useCategory()
    const categories = data.filter((item:any)=>item.status == true)
    const onSubmit:SubmitHandler<Inputs> = data=>{
        add(data)
    }
  return (
    <div>
        <div className="container mt-2">
            <div className='text-center'>Product Add</div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className=" col-span-6 sm:col-span-4 py-[30px] ">
                    <label className="block text-sm font-medium text-gray-700 ">Name</label>
                    <input type="text "{...register('name')} className="form-control " id="" placeholder=""/>
                </div>

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
                    <input type="number "{...register('quantity')} className="form-control"/>
                </div>
                <div className="col-span-6 sm:col-span-4 pb-[30px] ">
                    <label className="block text-sm font-medium text-gray-700 ">Image</label>
                    <input type="text"{...register('img')} className="form-control " />
                </div>
                <div className="col-span-6 sm:col-span-4 pb-[30px] ">
                    <label className="block text-sm font-medium text-gray-700 ">Category</label>
                    <select className="form-select mb-3" {...register('category')}  aria-label="Default select example">
                        {categories?.map((item:any)=>(
                             <option key={item._id} value={item._id}>{item.name}</option>
                        ))}
                    </select>
                </div>
                <div className="col-span-6 sm:col-span-4 ">
                    <label className="block text-sm font-medium text-gray-700 ">Details</label>
                    <div className="mb-6 ">
                        <textarea id="details " {...register('desc')} rows={3} className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md p-[20px] "></textarea>
                    </div>
                </div>
                <button className="btn btn-success my-[30px] px-[30px] bg-[#198754] " >Submit</button>
            </form>
        </div>
    </div>
  )
}
ProductAdd.Layout = LayoutAdmin
export default ProductAdd