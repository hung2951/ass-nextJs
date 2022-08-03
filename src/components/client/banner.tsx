import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import useBanner from '@/hooks/slide';

type ProductManagerProps = {
}
const Banner = (props: ProductManagerProps) => {
    const { data, error } = useBanner()
    console.log(data);
    if (!data) return <div>Loading...</div>
    if (error) return <div>Failed to loading</div>
    return (
        <>
            {/* <img src="https://suno.vn/blog/wp-content/uploads/2018/05/cach-chup-anh-san-pham-co-concept-758x400.jpg" alt="" width="100%" height="300" /> */}
            <div className="slide-container">
                <Slide>
                    {data.map((item: any) => (
                        // eslint-disable-next-line react/jsx-key
                        <div className="border-bottom text-[20px]">
                            <div className="" >
                                <div className="image-container"  >
                                    <div className="" key={item._id}>
                                        <img src={item.img} width="100%" height="50%" className="flex" />
                                    </div>
                                </div>
                            </div>


                        </div>
                    ))}
                </Slide>
            </div >



        </>


    )
}

export default Banner



