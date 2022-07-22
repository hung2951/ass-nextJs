import { LayoutProps } from '@/models/layout'
import Link from 'next/link'
import React from 'react'
import HeaderAdmin from '../admin/HeaderAdmin'
type Props = {}

const LayoutAdmin = (props: LayoutProps) => {
  return (
    <div>
        <header className='admin_header'>
          <div className='admin_header_logo'>
            <img src="https://th.bing.com/th/id/OIP.VCqgPSWfgHm_VAGr2CkwAAHaCz?pid=ImgDet&rs=1" alt="" />
          </div>
          <div className='admin_header_form'>
            <form >
              <input type="text" placeholder='Tìm kiếm sản phẩm...'/>
              <button>Tìm kiếm</button>
            </form>
          </div>
          <div className='group admin_header_avatar'>
            <button>
              <img src="https://th.bing.com/th/id/R.1080c9122f8a6fd9f151a4311d79becb?rik=zET1Vb%2br8ChxTg&pid=ImgRaw&r=0" />
              <div className='admin_header_avatar_drop_down'>
                <p><Link href={``}>Đổi mật khẩu</Link></p>
                <p><Link href={``}>Đăng xuất</Link></p>
              </div>
            </button>
          </div>
        </header>
        <div className='layout_admin'>
            <div className='layout_admin_sidebar'>
              <p><Link href={`/admin/product/`}>Sản phẩm</Link></p>
              <p><Link href={`product/`}>Sản phẩm</Link></p>
              <p><Link href={`product/`}>Sản phẩm</Link></p>
            </div>
            <div className='layout_admin_content'>
                {props.children}
            </div>
        </div>
    </div>
  )
}

export default LayoutAdmin