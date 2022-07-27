import React from 'react'
import LayoutAdmin from '@/components/layouts/LayoutAdmin'
import useCategory from '@/hook/category'
import { SubmitHandler, useForm } from 'react-hook-form'
import Link from 'next/link'
type formInputs = { 
  name:string,
  
}

const CategoryList = () => {
  const {data:categorys,error,remove,create } = useCategory();
  const {register,handleSubmit,formState:{errors}} = useForm<formInputs>();
  const onSubmit:SubmitHandler<formInputs> = data=>{
    create(data)
}
  if(!categorys)  return <div>loading...</div>
  if(error) return <div>eroood</div> 

  return (
    <div><table className="table-auto">
    <thead>
      <tr>
        <th>name</th>
        <th>status</th>  
        <th></th>
      </tr>
    </thead>
    <tbody>
      {categorys.map((category:any,index:any)=>(
         <tr key={index}>
         <td>{category.name}</td>
         <td>{category.status == true ? "đã kích hoạt" : "chưa kích hoạt"}</td>
         <td><button onClick={()=> remove(category._id)} >xoa</button> </td>
         <td> <Link href={`/admin/category/${category._id}`}>
                          <button className="btn btn-success" >Edit</button>
                        </Link></td>
       </tr>
      ))}
     <div>  
        <h2 className='text-center font-bold text-3xl mt-5'>Them Danh muc</h2>
        <form className='w-[500px] mx-auto mt-5' onSubmit={handleSubmit(onSubmit)}>Danh muc
            <label htmlFor="">
                <input  {...register('name')} className='block w-full h-10 rounded-sm pl-2 border border-[#ccc] mb-5' type="text" placeholder='' />
            </label>
    
            <button className='bg-blue-600 h-10 mt-7 w-28 rounded-sm text-white hover:bg-blue-500'>Save</button>
        </form>

    </div>
    </tbody>
  </table></div>
  )

}
CategoryList.Layout = LayoutAdmin
export default CategoryList    