import React, { useEffect } from 'react'
import LayoutAdmin from '@/components/layouts/LayoutAdmin'
import useCategory from '@/hook/category';
import useSWR from 'swr';
import { useRouter } from 'next/router';
import { SubmitHandler, useForm } from 'react-hook-form';
import { update } from '@/api/category';
type Props = {

}
type Inputs = {
  name:string,

}


const CategoryEdit = (props: Props) => {
  const router = useRouter();
    const { id } = router.query;
    const {data:categorys,updateCatrgory } = useCategory();
    const {register,handleSubmit,formState:{errors}} = useForm<Inputs>()
    const {data:category,error} = useSWR(id ? `/category/${id}` : null);
  // const {register,handleSubmit,formState:{errors},reset} = useForm<Category>();
  const onSubmit:SubmitHandler<Inputs> = data=>{
    updateCatrgory(id,data)
}


  if (!category) return <div>Loading...</div>;
  if (error) return <div>Error </div>;
console.log(category.name)

return (
  <div>
      <div className="container mt-2">
          <div className='text-center'>Product Edit</div>
          <form onSubmit={handleSubmit(onSubmit)} >
              <div className=" col-span-6 sm:col-span-4 py-[30px] ">
                  <label className="block text-sm font-medium text-gray-700 ">Name</label>
                  <input type="text "{...register('name')}  defaultValue={category.name} className="form-control " id="" placeholder=""/>
              </div>  
              <button className="btn btn-success my-[30px] px-[30px] bg-[#198754] " >Submit</button>
          </form>
      </div>
  </div>
)
}
CategoryEdit.Layout = LayoutAdmin
export default CategoryEdit