import React from 'react'
import LayoutAdmin from '@/components/layouts/LayoutAdmin'
import Link from 'next/link'
import useBanner from '@/hooks/slide'
type formInputs = {


}

const CategoryList = () => {
  const { data: banner, error, remove } = useBanner();
  console.log(banner);

  if (!banner) return <div>loading...</div>
  if (error) return <div>eroood</div>

  return (
    <div>
      <div className="container mt-5">
        <div className='text-center'>Slideshow</div>
        <Link href={`/admin/slide/add`}><button className='text-blue-600 text-sm underline'>Add Slideshow</button></Link>
        <table className="table table-borderless table-responsive card-1 p-4 text-base text-center">
          <thead>
            <tr className="border-bottom">
              <th> <span className="ml-2 ">STT</span> </th>
              <th> <span className="ml-2">Image</span> </th>
              <th colSpan={2} className=""> <span className="pl-[50px]">Action</span> </th>
            </tr>
          </thead>
          <tbody>
            {banner.map((item: any, index: number) => (
              <tr className="border-bottom" key={item._id}>
                <td className="">{index + 1}</td>
                <td ><img src={item.img} alt="" width="100px" className="m-auto" /></td>
                <td colSpan={2}>
                  <Link href={`/admin/slide/${item._id}`}>
                    <button className="btn btn-success" >Edit</button>
                  </Link>
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
CategoryList.Layout = LayoutAdmin
export default CategoryList    