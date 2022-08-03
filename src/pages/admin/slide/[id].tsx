import LayoutAdmin from '@/components/layouts/LayoutAdmin'
import useBanner from '@/hooks/slide'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import useSWR from 'swr'

type Props = {}
type formInputs = {
  img: any

}
const UpdateSlide = (props: Props) => {
  const router = useRouter();
  const { id } = router.query;
  const [image, setImage] = useState('')
  const [loading, setLoading] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm<formInputs>()
  const { updateItem } = useBanner()
  const { data: banner, error } = useSWR(id ? `/banners/${id}` : null);
  console.log(banner);
  if (!banner) return <div>Loading...</div>;
  if (error) return <div>Loading to failed</div>;
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
  const onSubmit: SubmitHandler<formInputs> = img => {
    updateItem(id, { img: image })
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
        <div className='text-center'>Edit slideshow</div>

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
              <img src={image || banner.img} style={{ width: '300px' }} {...register('img')} />

            )



            }

          </div>
          <button className="btn btn-success my-[30px] px-[30px] bg-[#198754] " >Submit</button>
        </form>
      </div>
    </div>
  )
}
UpdateSlide.Layout = LayoutAdmin
export default UpdateSlide