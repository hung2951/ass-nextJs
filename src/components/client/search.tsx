import { useProduct } from '@/hooks/product'
import { useRouter } from 'next/router'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

type Props = {}
type formInputs = { 
    q:string,
    
  }

const Search = (props: Props) => {

    const {register,handleSubmit} = useForm<formInputs>();
    const router = useRouter()
    const onSubmit: SubmitHandler<formInputs> = data => {
        router.push(`/search?q=${data.q}`)
       
    }

    return (
        <div>
            <form action="/search" className="w-[700px] mt-4 pl-10 flex " onSubmit={handleSubmit(onSubmit)} >
                <input {...register('q')}  type="text" className="h-10 w-10/12 pl-3 rounded-sm" placeholder="Nhập tên điện thoại, máy tính, phụ kiện... cần tìm" />
                <div>
                    <button className="bg-[#2b2d42] text-[#ffffff] hover:text-[#ff0000] px-[20px] py-[8px] rounded-r-lg">Tìm kiếm</button>
                </div>
            </form>

        </div>
    )
}

export default Search