import React from 'react'
import { useSelector } from 'react-redux'
import Images from '../components/images/Images';
import userImage from '../assets/user.jpg'
import Heading from '../components/heading/Heading';
import Paragraph from '../components/paragraph/Paragraph';

const Profile = () => {
    const user = useSelector((state)=>state.user.value)

    console.log(user);
    


  return (
    <div className='mt-36'>
        <div className="container mx-auto px-2">
            <div className='text-center w-1/2 mx-auto bg-secoundary text-white p-5 rounded-md'>
                <div className='w-28 h-28 mx-auto rounded-full my-5 ring-2 overflow-hidden ring-primary'>
                    <Images src={userImage} alt='image'/> 
                </div>
                <Heading className='border-b-2 pb-4 border-primary text-5xl my-5' tag='h2' text={user.name}/>
                <Paragraph className='font-bold text-2xl' text={user.email}/>

                <div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile