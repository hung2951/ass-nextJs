import React, { useEffect } from 'react'
import LayoutAdmin from '@/components/layouts/LayoutAdmin'
import useSWR from 'swr';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useComment } from '@/hooks/comment';
import moment from 'moment';
type Props = {

}

const ComponentID = (props: Props) => {
  const router = useRouter();
  const { id } = router.query;
  const { remove } = useComment();
  const { data, error } = useSWR(id ? `/cmt/cmtByProduct/${id}` : null)
  if (!data) return <div>loading...</div>
  if (error) return <div>error</div>
  if (data.comment == '') return <div>Không có bình luận nào</div>
  return (
    <div>
      <div className="container mt-5">
        <div className='text-center'>Product Management</div>
        <Link href={`/admin/comment`}><button className='text-blue-600 text-sm underline'>Back</button></Link>
        <table className="table table-borderless table-responsive card-1 p-4 text-base text-center">
          <thead>
            <tr className="border-bottom">
              <th> <span className="ml-2 ">STT</span> </th>
              <th> <span className="ml-2">Name</span> </th>

              <th> <span className="ml-2">Commnet</span> </th>
              <th> <span className="ml-2">Date</span> </th>
              <th colSpan={2} className=""> <span className="pl-[50px]">Action</span> </th>
            </tr>
          </thead>
          <tbody>
            {data.comment.map((item: any, index: number) => (
              <tr className="border-bottom" key={item._id}>
                <td className="">{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.content}</td>
                <td>{moment(item.createdAt).format("DD-MM-YYYY, h:mm:ss A")}</td>
                <td colSpan={2}>
                  <button className="btn btn-danger" onClick={() => remove(item._id)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
ComponentID.Layout = LayoutAdmin
export default ComponentID