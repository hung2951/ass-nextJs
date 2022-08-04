import { isAuthenticate } from '@/utils/localStogare'
import Link from 'next/link'
import React, { useEffect } from 'react'
import Search from './search'



type Props = {}

const Header = (props: Props) => {
    return (
        <>
            <div className="header-top flex justify-between h-[80px] w-[1200px] m-auto">
                <figure className="logo pt-5">
                    <Link href={'/'}>
                        <p><img src="https://themes.programmingkit.xyz/rafcart/assets/images/svg/logo.svg" width="150px" /></p>
                    </Link>
                </figure>
                <div>
                    <ul className="menu w-[600px] mt-5 pl-10 flex ">
                        <Link href={"/"} ><button className="px-[20px] " >Trang chủ</button></Link>
                        <Link href={`/products`}><button className="px-[20px] ">Sản phẩm</button></Link>
                        <Link href={"/posts"}><button className="px-[20px]"> Bài viết</button></Link>
                        <Link href={"/"}><button className="px-[20px]">Hỗ trợ</button></Link>
                    </ul>
                </div>
                <Link href={"/order-info"} ><button className='h-[60%] mt-9 hover:font-bold text-black '>Order Infomation</button></Link>

                <div className="flex mt-[30px] text-center checksn">
                    <div className="signin pl-5 ">
                        <div className="header-page-link">
                            <ul className="group-account">
                                <li className="user">
                                    <div className="drop-account">
                                        <div className="">
                                            <div className="flex">
                                                {isAuthenticate() ?
                                                    <div>{isAuthenticate().user.role == 1 ?
                                                        <div>
                                                            <button className='font-bold w-[100%] mr-8 text-lg'><Link href="/admin">{isAuthenticate().user.name}</Link></button>
                                                            <a href='' className=' no-underline  text-black text-sm' onClick={() => localStorage.removeItem('user')}>Logout</a>
                                                        </div>
                                                        : <div className=''>
                                                            <div className='font-bold w-[100%] mr-8 text-lg'>{isAuthenticate().user.name}</div>
                                                            <a href='' className=' no-underline text-black text-sm' onClick={() => localStorage.removeItem('user')}>Logout</a>
                                                        </div>
                                                    }

                                                    </div>
                                                    : <div>
                                                        <Link href={"/signup"} className=" sm:ml-3">
                                                            <button type="button" className=" inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[red] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Sign up </button>
                                                        </Link>
                                                        <Link href={"/signin"} className=" sm:ml-3">
                                                            <button type="button" className=" inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Sign in</button>
                                                        </Link>
                                                    </div>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#fd3d57]">
                <div className="header-top bg-[#fd3d57] flex justify-between h-[80px] w-[1200px] m-auto">
                    <div className="nav pt-4">
                        <div>
                            <button className="bg-[#2b2d42] text-[#ffffff] hover:text-[#ff0000] px-[20px] py-[8px] ">All categories</button>
                        </div>
                    </div>
                    <div>
                        <Search />
                    </div>
                    <div className="flex mt-4 text-center ">
                        <div className="signin pl-5">
                            <ul className="flex">
                                <Link href={"/cart"} className="no-underline">
                                    <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[blue] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Giỏ Hàng </button>
                                </Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header