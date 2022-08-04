import React from 'react'
import LayoutAdmin from '@/components/layouts/LayoutAdmin'
import Link from 'next/link'
import { useComment } from '@/hooks/comment'

type formInputs = {
  name: string,

}

const CommentList = () => {
  const { data: comment, error, remove, } = useComment();
  if (!comment) return <div>loading...</div>
  if (error) return <div>eroood</div>

  return (
    <div>
      <div className="container mt-5">
        <div className='text-center'>Product Management</div>
        <table className="table table-borderless table-responsive card-1 p-4 text-base text-center">
          <thead>
            <tr className="border-bottom">
              <th> <span className="ml-2 ">STT</span> </th>
              <th> <span className="ml-2">Name</span> </th>

              <th> <span className="ml-2">Comment</span> </th>
              <th colSpan={2} className=""> <span className="pl-[50px]">Action</span> </th>
            </tr>
          </thead>
          <tbody>
            {comment.map((item: any, index: number) => (
              <tr className="border-bottom" key={item._id}>
                <td className="">{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.content}</td>
                <td >

                  <button className="btn btn-danger" onClick={() => { remove(item._id) }}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )

}
CommentList.Layout = LayoutAdmin
export default CommentList    