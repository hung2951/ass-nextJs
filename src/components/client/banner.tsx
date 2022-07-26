import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';

type ProductManagerProps = {
}
const Banner = (props: ProductManagerProps) => {

    return (
        <>
            {/* <img src="https://suno.vn/blog/wp-content/uploads/2018/05/cach-chup-anh-san-pham-co-concept-758x400.jpg" alt="" width="100%" height="300" /> */}
            <div className="slide-container">
                <Slide>
                    <div className="border-bottom text-[20px]">
                        <div className="">
                            <div className="image-container">
                                <img src="https://inquangcaopcm.com/upload/images/53.jpeg" width="100%" height="100%" />
                            </div>

                        </div>
                    </div>
                </Slide>
            </div >



        </>


    )
}

export default Banner



