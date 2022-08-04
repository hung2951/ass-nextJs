import Link from 'next/link'
import React from 'react'

type Props = {}

const Success = (props: Props) => {
  return (
    <div className='text-center my-10'>
        <p className='text-3xl'>Đặt hàng thành công</p>
            <Link href={`/`}><button className='btn btn-success'>Tiếp tục mua sắm</button></Link>
    </div>
  )
}

export default Success