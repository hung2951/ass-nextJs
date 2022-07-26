import React from 'react'

type Props = {}

const Productsclient = (props: Props) => {
    return (
        <div>
            <div className="conten my-[20px]">
                <h1 className="font-bold text-[20px] py-[20px]">Recomended For You</h1>
                <div className="product grid grid-cols-3 gap-1 ">
                    <form action="">
                        <div className=" khoiy border-solid border-2 border-[#f3f3f3] rounded-lg overflow-hidden shadow-lg hover:scale-105 transition duration-500 cursor-pointer ">
                            <div className=" w-[100%] ">
                                <a href={'./Products/id'}> <img src="https://newshop.vn/public/uploads/products/9780/sisu-vuot-qua-tat-ca-nghe-thuat-song-cua-nguoi-phan-lan-bia.jpg" alt="" /></a>
                            </div>
                            <div className="py-[10px] px-[10px] leading-8">
                                <a href={'./Products/id'}>
                                    <h4 className="font-bold hover:underline">sfsdfsd</h4>
                                </a>
                                <p className="text-[15px] text-[red]">3123123123</p>
                                <p>130,000,000 lượt xem</p>
                            </div>
                            <div className="conten-item ">
                                <button id="btnAddToCart">Add to cart</button>
                            </div>
                        </div>
                    </form>
                </div>


            </div></div>
    )
}

export default Productsclient 