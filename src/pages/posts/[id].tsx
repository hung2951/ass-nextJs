import React from 'react'

type Props = {}

const PostDetail = (props: Props) => {
    return (
        <div>
            <div className="m-auto container text-center py-[20px] ">

                <h1>San Pham 1</h1>
                <img src="https://themes.programmingkit.xyz/rafcart/assets/images/slider-1.png" width="1000px" className="m-auto " />
                <p>sfassdasdasda</p>

                <div className=" shadow rounded p-8 sm:p-12">
                    <p className="text-3xl font-bold leading-7 text-center text-back">Contact me</p>
                    <form action="" method="post">
                        <div className="md:flex items-center mt-12">
                            <div className="w-full md:w-1/2 flex flex-col">
                                <label className="font-semibold leading-none text-back">Name</label>
                                <input type="text" className="  p-3 mt-4 shadow appearance-none border" />
                            </div>
                            <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                                <label className="font-semibold leading-none text-back ">Phone</label>
                                <input type="email" className=" p-3 mt-4 shadow appearance-none border" />
                            </div>
                        </div>
                        <div className="md:flex items-center mt-8">
                            <div className="w-full flex flex-col">
                                <label className="font-semibold leading-none text-back">Subject</label>
                                <input type="text" className=" p-3 mt-4 shadow appearance-none border" />
                            </div>
                        </div>
                        <div>
                            <div className="w-full flex flex-col mt-8">
                                <label className="font-semibold leading-none text-gray-300">Message</label>
                                <textarea className="h-40  p-3 focus:outline-none focus:border-blue-700 mt-4  rounded shadow appearance-none border" defaultValue={""} />
                            </div>
                        </div>
                        <div className="flex items-center justify-center w-full">
                            <button className="mt-9 font-semibold leading-none text-white py-4 px-10 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
                                Send message
                            </button>
                        </div>
                    </form>
                </div>


                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.863981044334!2d105.74459841476343!3d21.03812778599329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454b991d80fd5%3A0x53cefc99d6b0bf6f!2zVHLGsOG7nW5nIENhbyDEkeG6s25nIEZQVCBQb2x5dGVjaG5pYw!5e0!3m2!1svi!2s!4v1648751098675!5m2!1svi!2s" width={"100%"} height={450} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
        </div>
    )
}

export default PostDetail