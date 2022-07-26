import React from 'react'

type Props = {}

const Search = (props: Props) => {
    return (
        <div>
            <form action="/search" className="w-[700px] mt-4 pl-10 flex " >
                <input type="text" className="h-10 w-10/12 pl-3 rounded-sm" placeholder="Nhập tên điện thoại, máy tính, phụ kiện... cần tìm" />
                <div>
                    <button className="bg-[#2b2d42] text-[#ffffff] hover:text-[#ff0000] px-[20px] py-[8px] rounded-r-lg">Tìm kiếm</button>
                </div>
            </form>

        </div>
    )
}

export default Search