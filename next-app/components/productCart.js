"use client"

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProductCart({item}) {
    console.log(item);
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
        <Button variant="primary">Add to cart</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCart;