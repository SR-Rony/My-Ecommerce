import { useEffect, useState } from 'react'
import Product from '../product/Product'
import Heading from '../heading/Heading'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AllProduct = () => {
    const [product,setProduct] = useState([])
    let navigate = useNavigate()

    useEffect(()=>{
        let data = async () => {
            await axios.get('http://localhost:3001/api/product')
            .then((res)=>{
                let data = res.data.data
                setProduct(data)
                
            }).catch((error)=>{
                console.log(error)
                
            })
        }
        data()
    },[])

    const handleClick =(item)=>{
        navigate(`/product/${item.slug}`)
        
    }

  return (
    <div className='my-5 py-5 shadow-md bg-white'>
        <div className="container mx-auto px-2">
            <Heading className='mb-5 text-2xl border-b-2 border-secoundary pb-2 inline-block' tag='h2' text='All Product'/>
            <div className="grid grid-cols-12 gap-2">
                
                {product.map((item,index)=>(
                    <div onClick={()=>handleClick(item)} key={index} className="col-span-6 md:col-span-3 lg:col-span-2">
                        <Product price='200$' title={item.name} image={`http://localhost:3001${item.images}`}/>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default AllProduct