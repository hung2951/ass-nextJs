import React from 'react'

type Props = {}

const Category = (props: Props) => {
    return (
        <div>
            <button className="grid w-[250px] h-[100%]">
                <ul className="  border[#f3f3f3]">
                    <li className="px-[40px] py-[10px]  hover:bg-[#f3f3f3] list-none border-bottom  border-start"><a className="" href="/category/">San pham 1</a></li>

                    <li className="px-[40px] py-[10px]  hover:bg-[#f3f3f3] list-none border-bottom  border-start"><a className="" href="/category/">San pham 1</a></li>

                    <li className="px-[40px] py-[10px]  hover:bg-[#f3f3f3] list-none border-bottom  border-start"><a className="" href="/category/">San pham 1</a></li>
                </ul>
            </button>
        </div>
    )
}

export default Category