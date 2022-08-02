import { signup } from '@/api/auth'
import { Route } from 'next/dist/server/router'
import Link from 'next/link'
import { Router, useRouter } from 'next/router'
import path from 'path'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

type Props = {}

type Input = {
    name: string,
    email: string,
    password: string,
}
const Signup = (props: Props) => {
    const { register, handleSubmit, formState: { errors } } = useForm<Input>()

    const router = useRouter()
    const onSubmit: SubmitHandler<Input> = data => {
        signup(data)
            .then(res => {
                toast("Đăng kí thành công");
                setTimeout(() => {
                    router.push("/signin")
                }, 1000);
            })
            .catch(res => toast("Tài khoản đã tồn tại"))
    }
    return (
        <div className="container mx-auto">
            <div className="flex justify-center px-6 my-12">
                {/* Row */}
                <div className="w-full xl:w-3/4 lg:w-11/12 flex">
                    {/* Col */}
                    <div className="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg" style={{ backgroundImage: 'url("https://thongtinz.com/wp-content/uploads/2020/08/hinh-nen-phong-canh-1.jpg")' }} />
                    {/* Col */}
                    <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
                        <h3 className="pt-4 text-2xl text-center">Create an Account</h3>
                        <form className="mt-10" id="formSignup" onSubmit={handleSubmit(onSubmit)} >
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-normal mb-2" htmlFor="username">
                                    Username
                                </label>
                                <input {...register('name', { required: true })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="User name" id="username" />
                                {errors.name && <div className='text-red-600'>Không được để trống</div>}
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-normal mb-2" htmlFor="username">
                                    Email
                                </label>
                                <input {...register("email", { required: true })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" v-model="form.email" type="email" placeholder="Email" id="email-address" />
                                {errors.email && <div className='text-red-600'>Không được để trống</div>}
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-normal mb-2" htmlFor="password">
                                    Password
                                </label>
                                <input {...register("password", { required: true })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" v-model="form.password" type="password" placeholder="Password" autoComplete="current-password" id="password" />
                                {errors.name && <div className='text-red-600'>Không được để trống</div>}
                            </div>
                            <div className="mt-7">
                                <button type="submit" className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                                    Signup
                                </button>
                            </div>
                            <div className="flex mt-7 items-center text-center">
                                <hr className="border-gray-300 border-1 w-full rounded-md" />
                                <label className="block font-medium text-sm text-gray-600 w-full">
                                    Accede con
                                </label>
                                <hr className="border-gray-300 border-1 w-full rounded-md" />
                            </div>
                            <div className="flex mt-7 justify-center w-full">
                                <button className="mr-5 bg-blue-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                                    Facebook
                                </button>
                                <button className="bg-red-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                                    Google
                                </button>
                            </div>
                            <div className="mt-7">
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup