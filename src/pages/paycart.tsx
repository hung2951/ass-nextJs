import { create } from '@/api/orders'
import { useCart } from '@/hooks/cart'
import { useOrder, useOrderDetail } from '@/hooks/order'
import { currencyPrice } from '@/utils/formatMoney'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

type Props = {}
type Inputs = {
    name:string,
    email:string,
    phone:string,
    address:string
}
const Paycart = (props: Props) => {
    const router = useRouter()
    const {getCart} = useCart()
    let cart = getCart();
    let tong = 0;
    if (cart) {
        cart.map((item:any)=>tong+=item.totalNumber*item.price)
    }
    const {createOrderDetail} = useOrderDetail()
    const {register,handleSubmit,formState:{errors}} = useForm<Inputs>()
    
    const onSubmit:SubmitHandler<Inputs> = async (data) =>{
        try {
            const {_id:idOrder} = await create({...data,money:tong})
            cart.map((item:any)=>{
                const product = {
                name:item.name,
                price:item.price,
                sale_price:item.sale_price,
                quantity:item.totalNumber,
                img:item.img,
                idOrder:idOrder,
                idProduct:item._id,
                desc:item.desc,
                }
                createOrderDetail(product)
            })
            toast.success("Đặt hàng thành công")
            localStorage.removeItem('cart')
            router.push('/success')
        } catch (error) {
            toast.error("Đặt hàng thất bại")
        }
    }
    if(cart=='') return <div>Faild to loading</div>
    return (
        <div className="">
            <nav className="bg-white">
                <div className="d-flex align-items-center">
                </div>
            </nav>
            <div className="wrapper">
                <div className="h5 large">Billing Address</div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="col-lg-6 col-md-8 col-sm-10 offset-lg-0 offset-md-2 offset-sm-1">
                            <div className="mobile h5">Billing Address</div>
                            <div id="details" className="bg-white rounded pb-5">
                                <div className="form-group">
                                    <label className="text-muted">Họ và tên</label>
                                    <input type="text" {...register("name",{required:true})} className="form-control" /> 
                                </div>
                                {errors.name && <div className='text-red-600'>Không được để trống</div>}
                                <div className="form-group"> <label className="text-muted">Email</label>
                                    <div className="d-flex jusify-content-start align-items-center rounded p-2"> 
                                        <input type="email" {...register("email",{required:true})} /> 
                                        <span className="fas fa-check text-success pr-sm-2 pr-0"></span> 
                                    </div>
                                </div>
                                {errors.email && <div className='text-red-600'>Không được để trống</div>}
                                <div className="form-group"> <label className="text-muted">Số điện thoại</label>
                                    <div className="d-flex jusify-content-start align-items-center rounded p-2"> 
                                        <input type="text" {...register("phone",{required:true})} /> 
                                        <span className="fas fa-check text-success pr-sm-2 pr-0"></span> 
                                    </div>
                                </div>
                                {errors.phone && <div className='text-red-600'>Không được để trống</div>}
                                <div className="form-group"> <label className="text-muted">Địa chỉ</label>
                                    <div className="d-flex jusify-content-start align-items-center rounded p-2"> 
                                        <input type="text" {...register("address",{required:true})} /> 
                                        <span className="fas fa-check text-success pr-sm-2 pr-0"></span> 
                                    </div>
                                </div>
                                {errors.address && <div className='text-red-600'>Không được để trống</div>}
                            </div> 
                                <input type="checkbox" checked /> 
                                <label>Shipping address is same as billing</label>
                            </div>
                        <div className="col-lg-6 col-md-8 col-sm-10 offset-lg-0 offset-md-2 offset-sm-1 pt-lg-0 pt-3">
                            <div id="cart" className="bg-white rounded">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="h6">Cart Summary</div>
                                    <div className="h6"> <Link href={`/cart`}>Edit</Link> </div>
                                </div>
                               {cart?.map((item:any)=>(
                                 <div key={item._id} className="d-flex jusitfy-content-between align-items-center pt-3 pb-2 border-bottom">
                                 <div className="item pr-2"> 
                                     <img src={item.img} alt="" width="80" height="80" />
                                     <div className="number">{item.totalNumber}</div>
                                 </div>
                                 <div className="d-flex flex-column px-3"> <b className="h5">{item.name}</b> </div>
                                 <div className="ml-auto"> <b className="h5">{currencyPrice(item.price)}</b> </div>
                             </div>
                               ))}
                                <div className="my-3"> <input type="text" className="w-100 form-control text-center" placeholder="Gift Card or Promo Card" /> </div>
                            </div>

                            <div className="row pt-lg-3 pt-2 buttons mb-sm-0 mb-2">
                                <Link href={'/'}>
                                    <div className="col-md-6">
                                        <div className="btn text-uppercase">Continue to Shopping</div>
                                    </div>
                                </Link>
                                <div className="col-md-6 pt-md-0 pt-3">
                                    <button className='btn btn-success'>Đặt hàng</button>
                                </div>
                            </div>
                            <div className="text-muted pt-3" id="mobile"> <span className="fas fa-lock"></span> Your information is save </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Paycart