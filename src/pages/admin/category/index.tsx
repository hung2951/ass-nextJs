import React from 'react'
import LayoutAdmin from '@/components/layouts/LayoutAdmin'
import Link from 'next/link'
import useCategory from '@/hooks/category'
type formInputs = { 
  name:string,
  
}

const CategoryList = () => {
  const {data:categories,error,remove,evenStatus} = useCategory();
  if(!categories)  return <div>loading...</div>
  if(error) return <div>eroood</div> 

  return (
    <div>
       <div className="container mt-5">
        <div className='text-center'>Product Management</div>
        <Link href={`/admin/category/add`}><button className='text-blue-600 text-sm underline'>Create Category</button></Link>
          <table className="table table-borderless table-responsive card-1 p-4 text-base text-center">
              <thead>
                  <tr className="border-bottom">
                      <th> <span className="ml-2 ">STT</span> </th>
                      <th> <span className="ml-2">Name</span> </th>
                    
                      <th> <span className="ml-2">Status</span> </th>
                      <th colSpan={2} className=""> <span className="pl-[50px]">Action</span> </th>
                  </tr>
              </thead>
              <tbody>
                {categories.map((item:any,index:number)=>(
                  <tr className="border-bottom" key={item._id}>
                      <td className="">{index+1}</td>
                      <td>{item.name}</td>
                      <td><button onClick={()=>{evenStatus(item._id, { status: !item.status})}}>{item.status==true?"Activated":"Disable"}</button></td>
                      <td colSpan={2}>
                        <Link href={`/admin/category/${item._id}`}>
                          <button className="btn btn-success" >Edit</button>
                        </Link>
                        <button className="btn btn-danger" onClick={()=>{remove(item._id)}}>Remove</button>
                      </td>
                  </tr>
                ))}
              </tbody>
          </table>
      </div>
    </div>
  )

}
CategoryList.Layout = LayoutAdmin
export default CategoryList    