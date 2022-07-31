import useCategory from '@/hooks/category'
import React from 'react'

type Props = {}

const SearchCategory = (props: Props) => {
    const {data:category,error,SeacrchCategory} = useCategory();
    const categorys = SeacrchCategory;
    console.log(SeacrchCategory)
    if(!category)  return <div>loading...</div>
    if(error) return <div>eroood</div> 
    
  
  return (
    <div>
     {/* {categorys.map((item:any,index:any)=>(
        <div key={index}> {item.name}</div>
     )
   
     )} */}
    </div>
  )
}

export default SearchCategory