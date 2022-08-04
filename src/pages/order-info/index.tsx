import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

type Props = {}



const OrderInfo = (props: Props) => {
    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit: SubmitHandler<any> = data => {

    }
    return (
        <div className='text-center my-4'>
            <div>
                <h3>Nhập mã đơn hàng</h3>
                <form className="mt-4 pl-10 " onSubmit={handleSubmit(onSubmit)} >
                    <input type="text" className="h-10 w-[700px] pl-3 rounded-sm border mb-2" placeholder="Nhập mã đơn hàng" />
                    <div>
                        <button className="bg-[#2b2d42] text-[#ffffff] hover:text-[#ff0000] px-[20px] py-[8px] rounded-lg">Tìm kiếm</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default OrderInfo