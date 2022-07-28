import LayoutAdmin from '@/components/layouts/LayoutAdmin'
import useCategory from '@/hooks/category'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

type Props = {}
type formInputs = { 
    name:string,
    
  }
const AddCategory = (props: Props) => {
    const {data:categorys,error,create } = useCategory();
    const {register,handleSubmit,formState:{errors}} = useForm<formInputs>();
    const onSubmit:SubmitHandler<formInputs> = data=>{
      create(data)
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
                <input type="text "{...register('name')} className="form-control " id="" placeholder=""/>
           
            </div>

            <button className="btn btn-success my-[30px] px-[30px] bg-[#198754] " >Submit</button>
        </form>
    </div>
</div>
  )
}
AddCategory.Layout = LayoutAdmin
export default AddCategory