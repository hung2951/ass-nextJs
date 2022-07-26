import Link from 'next/link'
import React from 'react'
import Search from './search'



type Props = {}

const Header = (props: Props) => {
    return (
        <>

            <div className="header-top flex justify-between h-[80px] w-[1200px] m-auto">
                <figure className="logo pt-5">
                    <a href="">    <img src="https://themes.programmingkit.xyz/rafcart/assets/images/svg/logo.svg" width="150px" /></a>
                </figure>
                <div>

                    <ul className="w-[700px] mt-5 pl-10 flex  ">
                        <li className="px-[20px] "><Link href={"/"} className="text-decoration-none"> Dashboard</Link></li>
                        <li className="px-[20px] "><Link href={`./products/`}>Product</Link></li>
                        <li className="px-[20px]"><Link href={"./posts/"}>Blog</Link></li>
                        <li className="px-[20px]"><Link href={""}>Phone</Link></li>
                        <li className="px-[20px]"><Link href={""}>Contact</Link></li>

                    </ul>
                </div>
                <div className="flex mt-[30px] text-center checksn">
                    <div className="signin pl-5 ">
                        <div className="header-page-link">
                            <ul className="group-account">
                                <li className="user">
                                    <div className="drop-account">
                                        <div className="">
                                            <div className="flex">

                                                <Link href={"/signup"} className=" sm:ml-3">
                                                    <button type="button" className=" inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[red] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Sign up </button>
                                                </Link>

                                                <Link href={"/signin"} className=" sm:ml-3">
                                                    <button type="button" className=" inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Sign in</button>
                                                </Link>

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
                                <a href="./cart" className="no-underline">   <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[blue] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Gio Hàng </button></a>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header