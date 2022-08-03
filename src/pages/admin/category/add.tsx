import LayoutAdmin from '@/components/layouts/LayoutAdmin'
import useCategory from '@/hooks/category'
import { useRouter } from 'next/router'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
type Props = {}
type formInputs = { 
    name:string,
    
  }
const AddCategory = (props: Props) => {
    const {data:categorys,error,create } = useCategory();
    const {register,handleSubmit,formState:{errors}} = useForm<formInputs>();
    const router = useRouter()
    const onSubmit:SubmitHandler<formInputs> = data=>{
      create(data)
      .then(res => {
        toast("Thêm danh mục thành công");
        setTimeout(() => {  
            router.push("/admin/category")
        }, 1000);
    })
    .catch(res => toast.warning("....."))
  }
  if(!categorys)  return <div>loading...</div>
  if(error) return <div>eroood</div> 
  return (
    <div>
    <div className="container mt-2">
        <div className='text-center'>Product Add</div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className=" col-span-6 sm:col-span-4 py-[30px] ">
                <label className="block text-sm font-medium text-gray-700 ">Name</label>
                <input type="text "{...register('name',{required:true})} className="form-control " id="" placeholder=""/>
                {errors.name && <div className='text-red-600'>Không được để trống</div>}
            </div>
        
            <button className="btn btn-success my-[30px] px-[30px] bg-[#198754] " >Submit</button>
        </form>
    </div>
</div>
  )
}
AddCategory.Layout = LayoutAdmin
export default AddCategory