import React, { useEffect } from 'react'
import LayoutAdmin from '@/components/layouts/LayoutAdmin'
import useCategory from '@/hook/category';
import useSWR from 'swr';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
type Props = {

}
type Inputs = {
  name:string,

}


const CategoryEdit = (props: Props) => {
  const router = useRouter();
    const { id } = router.query;

    const {register,handleSubmit,formState:{errors}} = useForm<Inputs>()
    const {data:category,error} = useSWR(id ? `/category/${id}` : null);
  // const {register,handleSubmit,formState:{errors},reset} = useForm<Category>();



  if (!category) <div>Loading...</div>;
  if (error) <div>Error </div>;
console.log(category)

return (
  <div>
      <div className="container mt-2">
          <div className='text-center'>Product Edit</div>
          <form >
              <div className=" col-span-6 sm:col-span-4 py-[30px] ">
                  <label className="block text-sm font-medium text-gray-700 ">Name</label>
                  <input type="text "{...register('name')}  className="form-control " id="" placeholder=""/>
              </div>
              <button className="btn btn-success my-[30px] px-[30px] bg-[#198754] " >Submit</button>
          </form>
      </div>
  </div>
)
}
CategoryEdit.Layout = LayoutAdmin
export default CategoryEdit