import LayoutAdmin from '@/components/layouts/LayoutAdmin'
import { useAuth } from '@/hooks/auth'
import Link from 'next/link'
import React from 'react'

type Props = {}

const ListUsers = (props: Props) => {
    const {data:user, error} = useAuth()
    if(!user) return <div>Loading...</div>
    if(error) return <div>Fail to load</div>
    
  return (
    <div>
       <div className="container mt-5">
        <div className='text-center'>Users Management</div>
        <Link href={`/admin/signup/`}>Signup</Link>
          <table className="table table-borderless table-responsive card-1 p-4 text-base text-center">
              <thead>
                  <tr className="border-bottom">
                      <th> <span className="ml-2 ">STT</span> </th>
                      <th> <span className="ml-2">Name</span> </th>
                      <th> <span className="ml-2">Email</span> </th>
                      <th> <span className="ml-2">Status</span> </th>
                  </tr>
              </thead>
              <tbody>
                {user?.map((item:any, index:number)=>(
                    <tr className="border-bottom" key={item._id}>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td className='btn btn-success'><button className='status' >{item.status==true?"Activated":"Disable"}</button></td>
                    </tr>
                ))}
              </tbody>
          </table>
      </div>
    </div>
  )
}
ListUsers.Layout= LayoutAdmin
export default ListUsers