"use client"

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useRouter } from 'next/navigation'

function ProductCart({item}) {
  const router = useRouter()

  const handleAddCard = async(item)=>{
      fetch('http://localhost:3001/api/product/card', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
              productId: item._id,
              ownerId: '660a2c4a4ed034ffdc295eab',
              quantity: 1
            }),
        })
        .then(res=>res.json())
        .then(()=>router.push('/card'))
  }
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`http://localhost:3001${item.images}`} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
          {item.description}
        </Card.Text>
        <Card.Text>
        {item.saleprice 
            ? <div><span><del>{item.regularprice}</del></span> <span>{item.saleprice}</span></div>
            : <p>{item.saleprice}</p>
        }
        </Card.Text>
        <Button onClick={()=> handleAddCard(item)} variant="primary">Add to cart</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCart;