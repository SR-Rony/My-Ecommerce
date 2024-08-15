import React from 'react'
import Product from '../product/Product'
import Heading from '../heading/Heading'

const AllProduct = () => {
  return (
    <div className='my-5 py-5 shadow-md bg-white'>
        <div className="container mx-auto px-2">
            <Heading className='mb-5 text-2xl border-b-2 border-secoundary pb-2 inline-block' tag='h2' text='All Product'/>
            <div className="grid grid-cols-12 gap-2">
                <div className="col-span-6 md:col-span-3 lg:col-span-2">
                    <Product price='200$' title='Free Online Amazon Product Showcase Maker' image='https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg'/>
                </div>
                <div className="col-span-6 md:col-span-3 lg:col-span-2">
                    <Product price='200$' title='Free Online Amazon Product Showcase Maker' image='https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg'/>
                </div>
                <div className="col-span-6 md:col-span-3 lg:col-span-2">
                    <Product price='200$' title='Free Online Amazon Product Showcase Maker' image='https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg'/>
                </div>
                <div className="col-span-6 md:col-span-3 lg:col-span-2">
                    <Product price='200$' title='Free Online Amazon Product Showcase Maker' image='https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg'/>
                </div>
                <div className="col-span-6 md:col-span-3 lg:col-span-2">
                    <Product price='200$' title='Free Online Amazon Product Showcase Maker' image='https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg'/>
                </div>
                <div className="col-span-6 md:col-span-3 lg:col-span-2">
                    <Product price='200$' title='Free Online Amazon Product Showcase Maker' image='https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg'/>
                </div>
                <div className="col-span-6 md:col-span-3 lg:col-span-2">
                    <Product price='200$' title='Free Online Amazon Product Showcase Maker' image='https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg'/>
                </div>
                <div className="col-span-6 md:col-span-3 lg:col-span-2">
                    <Product price='200$' title='Free Online Amazon Product Showcase Maker' image='https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg'/>
                </div>
                <div className="col-span-6 md:col-span-3 lg:col-span-2">
                    <Product price='200$' title='Free Online Amazon Product Showcase Maker' image='https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AllProduct