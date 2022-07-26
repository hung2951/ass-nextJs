import type { NextPage } from 'next'


const Home: NextPage = () => {
  return (
    <div className="container min-w-full m-auto">
      <div className="header-top flex justify-between h-[80px] w-[1200px] m-auto">
        <figure className="logo pt-5">
          <a href="">    <img src="https://themes.programmingkit.xyz/rafcart/assets/images/svg/logo.svg" width="150px" /></a>
        </figure>
        <div>
          <ul className="w-[700px] mt-5 pl-10 flex ">
            <li><a className="px-[20px]" href="">Homepage</a></li>
            <li><a className="px-[20px]" href="/product">Product</a></li>
            <li><a className="px-[20px]" href="/posts">Blog</a></li>
            <li><a className="px-[20px]" href="#">Phone</a></li>
            <li><a className="px-[20px]" href="#">Contact</a></li>

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

                        <a href="auth/signup" className=" sm:ml-3">
                          <button type="button" className=" inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[red] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Sing up </button>
                        </a>

                        <a href="auth/signin" className=" sm:ml-3">
                          <button type="button" className=" inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Sing in</button>
                        </a>

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
            <form action="/search" className="w-[700px] mt-4 pl-10 flex " >
              <input type="text" className="h-10 w-10/12 pl-3 rounded-sm" placeholder="Nhập tên điện thoại, máy tính, phụ kiện... cần tìm" />
              <div>
                <button className="bg-[#2b2d42] text-[#ffffff] hover:text-[#ff0000] px-[20px] py-[8px] rounded-r-lg">Tìm kiếm</button>
              </div>
            </form>
          </div>
          <div className="flex mt-4 text-center ">
            <div className="signin pl-5">
              <ul className="flex">
                <a href="/cart" className="no-underline">   <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[blue] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Gio Hàng </button></a>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <article className=" mx-auto w-[1200px] ">

        <div className="container">
          <div className="flex">
            <div>

              <button className="grid w-[250px] h-[100%]">
                <ul className=" border-start border[#f3f3f3]">
                  <li className="px-[40px] py-[10px]  hover:bg-[#f3f3f3] list-none border-bottom "><a className="" href="/category/">San pham 1</a></li>
                </ul>
              </button>

            </div>
            <div className="banner bg-[white] w-[1000px] scroll-mb-[10px]">
              bannner
            </div>
          </div>

          <article className=" mx-auto w-[1200px] ">
            <div className="mx-[120px] grid grid-cols-3 gap-6 overflow-hidden relative  my-[20px]">
              <div className="grid grid-cols-2 border-solid border-2 border-[#ec5959] rounded-lg px-[30px] py-[10px] ">
                <div>
                  <img src="https://rafcart.rslahmed.com/assets/images/svg/delivery-van.svg" alt="" className="m-auto" />
                </div>
                <div>
                  <h2 className="font-bold">Free shipping</h2>
                  <p className="text-xs">Orders over $200</p>
                </div>

              </div>
              <div className="grid grid-cols-2 border-solid border-2 border-[#ec5959] rounded-lg px-[30px] py-[10px]">
                <div>
                  <img src="https://rafcart.rslahmed.com/assets/images/svg/money-back.svg" alt="" className="m-auto" />
                </div>
                <div>
                  <h2 className="font-bold">Money Returns</h2>
                  <p className="text-xs">30 Days money return</p>
                </div>
              </div>
              <div className="grid grid-cols-2 border-solid border-2 border-[#ec5959] rounded-lg px-[30px] py-[10px]">
                <div>
                  <img src="https://rafcart.rslahmed.com/assets/images/svg/service-hours.svg" alt="" className="m-auto" />
                </div>
                <div>
                  <h2 className="font-bold">24/7 Support</h2>
                  <p className="text-xs">Customer support</p>
                </div>
              </div>

            </div>
            <div className="conten my-[20px]">
              <h1 className="font-bold text-[20px] py-[20px]">Recomended For You</h1>
              <div className="product grid grid-cols-4 gap-5 ">
                <form action="">
                  <div className=" khoiy border-solid border-2 border-[#f3f3f3] rounded-lg overflow-hidden shadow-lg hover:scale-105 transition duration-500 cursor-pointer ">
                    <div className=" w-[100%] ">
                      <a href="/product/"> <img src="" alt="" /></a>
                    </div>
                    <div className="py-[10px] px-[10px] leading-8">
                      <a href="/product/">
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
          <div className="conten my-[20px]">
            <h1 className="font-bold text-[20px] py-[20px]">Recomended For You</h1>
            <div className="bg-gray-100">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto py-8 sm:py-10 lg:max-w-none">
                  <div className="container  mx-auto max-w-7x1">
                    <div className="flex flex-wrap -m-4">
                      <div className="xl:w-1/3 md:w-1/2 p-4 overflow-hidden shadow-lg hover:scale-105 transition duration-500 cursor-pointer">
                        <div className="bg-white p-6 rounded-lg">
                          <a href="/posts/"> <img className="no-underline lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72 rounded w-full object-cover object-center mb-6" src="https://themes.programmingkit.xyz/rafcart/assets/images/slider-1.png" /></a>
                          <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font"> 20/12/2022</h3>
                          <a className="no-underline" href="/posts/">
                            <h2 className=" text-lg text-gray-900 font-medium title-font mb-4">ewrwererwe</h2>
                          </a>
                          <p className="leading-relaxed text-base">dgdfgdfgdgfdgdgdfg</p>
                        </div>
                      </div>



                    </div>
                  </div>
                </div>
              </div>
            </div>
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
      <div>
        <div className="bg-gray-100">
          <div className=" w-[1200px] m-auto grid grid-cols-4 pt-10 pb-10 gap-[20px]  ">
            <div className="w-[320px] px-[20px] ">
              <div>
                <img src="https://themes.programmingkit.xyz/rafcart/assets/images/svg/logo.svg " />
              </div>
              <p className="py-[10px] leading-5">Lorem ipsum, or it is sometimes kno wn, is dummy text used in laying out print</p>
              <div>
                <div className="footer_newslet">
                  <h6 className="font-bold py-[10px]">NEWSLETTER</h6>
                  <form className="footernews_form">
                    <input type="text" placeholder="Your email address" className="py-[10px] rounded-lg bg-none" />
                    <a href="#">
                      <button type="submit" className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Sing in</button>
                    </a>
                  </form>
                </div>
              </div>
            </div>
            <div className="intro px-[20px]">
              <div>

                <h4 className="font-bold leading-8 ">MY ACCOUNT</h4>
              </div>
              <div className="pt-[10px] leading-8">
                <p><a href="" className="no-underline text-blue-600 visited:text-purple-600 hover:text-red-500">Orders</a></p>
                <p><a href="" className="no-underline text-blue-600 visited:text-purple-600 hover:text-red-500">Wishlist</a></p>
                <p><a href="" className="no-underline text-blue-600 visited:text-purple-600 hover:text-red-500">Track Order</a></p>
                <p><a href="" className="no-underline text-blue-600 visited:text-purple-600 hover:text-red-500">Manage Account</a></p>
                <p><a href="" className="no-underline text-blue-600 visited:text-purple-600 hover:text-red-500">Return Order</a></p>
              </div>
            </div>
            <div className="intro px-[20px]">
              <div>

                <h4 className="font-bold leading-8 ">INFORMATION</h4>
              </div>
              <div className="pt-[10px] leading-8">
                <p><a href="" className="no-underline text-blue-600 visited:text-purple-600 hover:text-red-500">About Us</a></p>
                <p><a href="" className="no-underline text-blue-600 visited:text-purple-600 hover:text-red-500">Return Policy</a></p>
                <p><a href="" className="no-underline text-blue-600 visited:text-purple-600 hover:text-red-500">Terms &amp; condition</a></p>
                <p><a href="" className="no-underline text-blue-600 visited:text-purple-600 hover:text-red-500">Privacy Policy</a></p>
                <p><a href="" className="no-underline text-blue-600 visited:text-purple-600 hover:text-red-500">
                  FAQ</a></p>
              </div>
            </div>
            <div className="intro px-[20px]">
              <div>
                <h4 className="font-bold leading-8 ">CONTACT</h4>
              </div>
              <div className="pt-[10px] leading-8">
                <p>Tòa nhà FPT Polytechnic, P. Trịnh Văn Bô, Xuân Phương, Nam Từ Liêm, Hà Nội</p>
                <p>Phone :+566 477 256, +566 254 575</p>
                <p>Email : Thetam1998@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="py-3 bg-[#2b2d42] text-center text-xs text-[#ffffff]">
          <p>© RAFCART - All Rights Reserved</p>
        </div>
      </div>

    </div>

  )
}

export default Home
