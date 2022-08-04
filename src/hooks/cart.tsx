import { toast } from "react-toastify"
import { useSWRConfig } from "swr"

export const useCart = () => {
    let cart:any = []
    // lấy sản phẩm trong giỏ hàng gán vào biến cart
    const getCart = ()=>{
        if (typeof window !== 'undefined') {
            if (localStorage.getItem('cart')) {
                return cart = JSON.parse(localStorage.getItem('cart') as string)
            }
            return cart = []
        }
    }
    // add to cart
    const addToCart = (newProduct:any)=>{
        getCart()
        const exist = cart.find((item:any)=>item._id === newProduct._id)
        if(!exist) {
            cart.push(newProduct)
        }
        else{
            exist.totalNumber++
        }
        toast.success('Đã thêm vào giỏ hàng')
        localStorage.setItem('cart', JSON.stringify(cart))
    }
    // 
    const increase = (id:string) =>{
        getCart()
        cart.find((item:any) => item._id === id).totalNumber++;
        localStorage.setItem('cart', JSON.stringify(cart));
    }
    const decrease = (id:string) =>{
        getCart()
        const Item = cart.find((product:any) => product._id === id);
        Item.totalNumber--;
        // nếu sản phẩm giảm nhỏ hơn 1 thì xóa
        if (Item.totalNumber < 1) {
            const confirm = window.confirm('Bạn có muốn xóa sản phẩm này không?');
            if (confirm) {
                cart = cart.filter((item:any) => item._id !== Item._id);
            } else {
                Item.totalNumber = 1;
            }
        }
        localStorage.setItem('cart', JSON.stringify(cart));
    }
    const removeItemCart = (id: string) => {
        getCart()
        const confirm = window.confirm('Bạn có muốn xóa sản phẩm này không?');
        if (confirm) {
            cart = cart.filter((item:any) => item._id !== id);
        }
        localStorage.setItem('cart', JSON.stringify(cart));
    }
    return {addToCart,increase,decrease,getCart,removeItemCart}
}


