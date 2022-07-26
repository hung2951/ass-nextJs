import Link from 'next/link'
import React from 'react'

type Props = {}

const Post = (props: Props) => {
    return (
        <div className="conten my-[20px]">
            <h1 className="font-bold text-[20px] py-[20px]">Recomended For You</h1>
            <div className="bg-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl mx-auto py-8 sm:py-10 lg:max-w-none">
                        <div className="container  mx-auto max-w-7x1">
                            <div className="flex flex-wrap -m-4">
                                <div className="xl:w-1/3 md:w-1/2 p-4 overflow-hidden shadow-lg hover:scale-105 transition duration-500 cursor-pointer">
                                    <div className="bg-white p-6 rounded-lg">
                                        <Link href={`/posts/id/`}> <img className="no-underline lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72 rounded w-full object-cover object-center mb-6" src="https://themes.programmingkit.xyz/rafcart/assets/images/slider-1.png" /></Link>
                                        <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font"> 20/12/2022</h3>
                                        <Link className="no-underline" href={`/posts/id`}>
                                            <h2 className=" text-lg text-gray-900 font-medium title-font mb-4">ewrwererwe</h2>
                                        </Link>
                                        <p className="leading-relaxed text-base">dgdfgdfgdgfdgdgdfg</p>
                                    </div>
                                </div>



                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Post