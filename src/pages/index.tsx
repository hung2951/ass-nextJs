
import Banner from '@/components/client/banner'
import Category from '@/components/client/category'
import Post from '@/components/client/post'
import Productsclient from '@/components/client/products'
import type { NextPage } from 'next'


const Home: NextPage = () => {
  return (
    <>
      <div className="container min-w-full m-auto">
        <article className=" mx-auto w-[1200px] ">
          <div className="container">
            <div className="flex">
              <div>
                <Category />
              </div>
              <div className="banner bg-[white] w-[950px] scroll-mb-[10px]">
                <Banner />
              </div>
            </div>

            <article className=" mx-auto w-[1200px] ">
              <div className="mx-[10px] grid grid-cols-3 gap-6 overflow-hidden relative  my-[20px]">
                <div className="grid grid-cols-2 border-solid border-2 border-[#ec5959] rounded-lg  py-[10px] ">
                  <div>
                    <img src="https://themes.programmingkit.xyz/rafcart/assets/images/svg/delivery-van.svg" className="m-auto pt-[9px]" />
                  </div>
                  <div>
                    <h5 className="font-bold">Free shipping</h5>
                    <p className="text-xs">Orders over $200</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 border-solid border-2 border-[#ec5959] rounded-lg  py-[10px]">
                  <div>
                    <img src="https://themes.programmingkit.xyz/rafcart/assets/images/svg/money-back.svg" className="m-auto" />
                  </div>
                  <div>
                    <h5 className="font-bold">Money Returns</h5>
                    <p className="text-xs">30 Days money return</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 border-solid border-2 border-[#ec5959] rounded-lg  py-[10px]">
                  <div>
                    <img src="https://themes.programmingkit.xyz/rafcart/assets/images/svg/service-hours.svg" className="m-auto" />
                  </div>
                  <div>
                    <h5 className="font-bold">24/7 Support</h5>
                    <p className="text-xs">Customer support</p>
                  </div>
                </div>
              </div>
              <div>
                <Productsclient />
              </div>
            </article>
            <div className="conten my-[20px]">
              <h1 className="font-bold text-[20px] py-[20px]">New Arrivals</h1>

              <div>
                <div className="banner2 my-[30px]">
                  <img src="https://newshop.vn/public/uploads/options/tusachlamchame.jpg" alt="" width="100%" />
                </div>
              </div>
            </div>
            <div>
              <Post />

            </div>
            <div className="bg-[#f2e4ab] grid grid-cols-2 gap-1 my-[20px] ">
              <div className="img-1 my-[20px]">
                <img src="https://newshop.vn/public/uploads/products/43880/sach-cat-khoang-troi-vao-tui-ao.jpg" alt="" className="w-[50%] m-auto" />
              </div>
              <div className="conten2 py-[10%] ">
                <h1 className="font-bold text-[30px] text-center">Download RAFCART App Now!</h1>
                <p className="py-[10px]">Shopping fastly and easily more with our app. Get a link to download the app on your phone</p>
                <form action="" className="w-[700px] flex ">
                  <input type="text" className="h-10 w-8/12 pl-3 rounded-sm" placeholder="Email Address" />
                  <div>
                    <button className="bg-[red] text-[#ffffff] hover:text-[#DCE800] px-[20px] py-[8px] rounded-r-lg">Subscribe</button>
                  </div>
                </form>
              </div>

            </div>

          </div>
        </article >

      </div>
    </>

  )
}

export default Home
  