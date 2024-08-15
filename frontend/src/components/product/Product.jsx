import { Button, Card } from 'antd';
import Images from '../images/Images';
const { Meta } = Card;
const Product = ({image,title,price}) => (
  <Card className='group overflow-hidden my-2' onClick={()=>console.log("click")
  }
  style={{
    cursor:'pointer'
  }}
    cover={
      <div className='h-60 overflow-hidden' >
        <Images className='h-full group-hover:scale-105 duration-200' src={image} alt='img' />
      </div>
    }
    // actions={[
    //     // <SettingOutlined onClick={()=>console.log('click')
    //     // } key="setting" />,
    //     <Button className='bg-primary'>Add to card</Button>,
    //     <Button color='success'>Add to card</Button>,
    //     // <EditOutlined key="edit" />,
    // ]}
  >
    <Meta
      title={title}
      description={
        <span className='text-primary'>{price}</span>
      }
    />
  </Card>
);
export default Product;