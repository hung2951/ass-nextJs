import LayoutAdmin from '@/components/layouts/LayoutAdmin'
import useCategory from '@/hooks/category'
import { useProduct } from '@/hooks/product'
import { useRouter } from 'next/router'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import useSWR from 'swr'

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
const ProductEdit = (props: Props) => {
    const router = useRouter();
    const { id } = router.query;
    const {updateItem} =useProduct();
    const {register,handleSubmit,formState:{errors}} = useForm<Inputs>()
    const {data:product,error} = useSWR(id ? `/products/${id}` : null);
    const {data:categories} = useCategory()
    const categoriesNew = categories.filter((item:any)=>item.status == true)
    if (!product) return <div>Loading...</div>;
    if (error) return <div>Loading to failed</div>;
    console.log(product.category);
    
    const onSubmit:SubmitHandler<Inputs> = data=>{
        updateItem(id,data)
    }
  return (
    <div>
        <div className="container mt-2">
            <div className='text-center'>Product Edit</div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className=" col-span-6 sm:col-span-4 py-[30px] ">
                    <label className="block text-sm font-medium text-gray-700 ">Name</label>
                    <input type="text "{...register('name')} defaultValue={product.name} className="form-control " id="" placeholder=""/>
                </div>

                <div className="col-span-6 sm:col-span-4 pb-[30px] ">
                    <label className="block text-sm font-medium text-gray-700 ">Price</label>
                    <input type="number "{...register('price')} defaultValue={product.price} className="form-control"/>
                </div>
                <div className="col-span-6 sm:col-span-4 pb-[30px] ">
                    <label className="block text-sm font-medium text-gray-700 ">Discount</label>
                    <input type="number " {...register('discount')}  defaultValue={product.discount}  className="form-control"/>
                </div>
                <div className="col-span-6 sm:col-span-4 pb-[30px] ">
                    <label className="block text-sm font-medium text-gray-700 ">Quantity</label>
                    <input type="number "{...register('quantity')} defaultValue={product.quantity} className="form-control"/>
                </div>
                <div className="col-span-6 sm:col-span-4 pb-[30px] ">
                    <label className="block text-sm font-medium text-gray-700 ">Image</label>
                    <input type="text"{...register('img')} defaultValue={product.img} className="form-control " />
                </div>
                <div className="col-span-6 sm:col-span-4 pb-[30px] ">
                    <label className="block text-sm font-medium text-gray-700 ">Category</label>
                    <select className="form-select mb-3" {...register('category')} aria-label="Default select example">
                        {categoriesNew.map((item:any)=>(
                            <option key={item._id} value={item._id}>{item.name}</option>
                        ))}
                        
                </select>
                </div>
                <div className="col-span-6 sm:col-span-4 ">
                    <label className="block text-sm font-medium text-gray-700 ">Details</label>
                    <div className="mb-6 ">
                        <textarea id="details" {...register('desc')} className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md h-10">{product.desc}</textarea>
                    </div>
                </div>
                <button className="btn btn-success my-[30px] px-[30px] bg-[#198754] " >Submit</button>
            </form>
        </div>
    </div>
  )
}
ProductEdit.Layout = LayoutAdmin
export default ProductEdit