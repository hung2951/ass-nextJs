import React from 'react'
import LayoutAdmin from '@/components/layouts/LayoutAdmin'
import Link from 'next/link'
import { useComment } from '@/hooks/comment'
import { useProduct } from '@/hooks/product'
import { log } from 'console'

type formInputs = {
  name: string,

}

const CommentList = () => {
  const { data, error } = useProduct();
  const { data: cmt, error: cmtError } = useComment();
  if (!data || !cmt) return <div>loading...</div>
  if (error || cmtError) return <div>eroood</div>
  if (data == '') return <div>Không có sản phẩm nào</div>
  return (
    <div>
      <div className="container mt-5">
        <div className='text-center'>Product Management</div>
        <table className="table table-borderless table-responsive card-1 p-4 text-base text-center">
          <thead>
            <tr className="border-bottom">
              <th> <span className="ml-2 ">STT</span> </th>
              <th> <span className="ml-2">Name</span> </th>

              <th colSpan={2} className=""> <span className="pl-[50px]"></span> </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item: any, index: number) => (
              <tr className="border-bottom" key={item._id}>
                <td className="">{index + 1}</td>
                <td>{item.name}</td>
                <td >
                  <Link href={`/admin/comment/${item._id}`}>
                    <button className="btn btn-success" >View</button>
                  </Link>
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