import { orderDetail } from '@/api/orders'
import { useOrder } from '@/hooks/order'
import { useRouter } from 'next/router'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import useSWR from 'swr'

type Props = {}

type Input = {
    id: string
}

const OrderInfo = (props: Props) => {
    const router = useRouter()
    const { register, handleSubmit, formState: { errors } } = useForm<Input>()
    const onSubmit: SubmitHandler<Input> = (data: any) => {
        router.push(`/order-info/${data.id}`)
    }
    return (
        <div className='text-center my-4'>
            <div>
                <h3>Nhập mã đơn hàng</h3>
                <form className="mt-4 pl-10 " onSubmit={handleSubmit(onSubmit)} >
                    <input {...register('id')} type="text" className="h-10 w-[700px] pl-3 rounded-sm border mb-2" placeholder="Nhập mã đơn hàng" />
                    <div>
                        <button className="bg-[#2b2d42] text-[#ffffff] hover:text-[#ff0000] px-[20px] py-[8px] rounded-lg">Tìm kiếm</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default OrderInfo