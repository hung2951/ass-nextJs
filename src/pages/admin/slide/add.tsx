import LayoutAdmin from '@/components/layouts/LayoutAdmin'
import useBanner from '@/hooks/slide'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

type Props = {}
type formInputs = {
  img: any

}
const AddCategory = (props: Props) => {
  const [image, setImage] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const { register, handleSubmit, formState: { errors } } = useForm<formInputs>()
  const { add } = useBanner()
  const uploadImage = async (e: any) => {
    const files = e.target.files
    const data = new FormData()
    data.append('file', files[0])
    data.append('upload_preset', 'veaztpu6')
    setLoading(true)
    const res = await fetch(
      '	https://api.cloudinary.com/v1_1/ecommercer/image/upload',
      {
        method: 'POST',
        body: data
      }
    )
    const file = await res.json()

    setImage(file.url)
    setLoading(false)

  }


  const onSubmit: SubmitHandler<formInputs> = data => {

    add({ img: image })
      .then(res => {
        toast.success("Thêm thành công")
        setTimeout(() => {
          router.push('/admin/slide')
        }, 1000);
      })
      .catch(() => toast.error("Lỗi"))
  }

  return (
    <div>
      <div className="container mt-5">
        <div className='text-center'>Add slideshow</div>

        <form action="" onSubmit={handleSubmit(onSubmit)}>

          <div className="App">
            <h1>Upload Image</h1>
            <input
              type="file"
              placeholder="Upload an image"
              onChange={uploadImage}
            />
            {loading ? (
              <h3>Loading...</h3>
            ) : (
              <img src={image} style={{ width: '300px' }} {...register('img')} />
            )

            }


          </div>
          <button className="btn btn-success my-[30px] px-[30px] bg-[#198754] " >Submit</button>
        </form>
      </div>
    </div>
  )
}
AddCategory.Layout = LayoutAdmin
export default AddCategory