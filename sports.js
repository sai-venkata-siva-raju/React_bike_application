import React from 'react';
import Card from 'react-bootstrap/Card';
import v4 from './v4.webp';
import v2 from './v2.webp';

const sports = () => {
  return (
    <div>
      <center>
        <br/>
      <h1>welcome to sports Bikes by Ducati</h1>
      <br/>
      </center>
      <div className='cruiser'>
        <div>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={v4} />
      <Card.Body>
        <Card.Title>
          </Card.Title>
        <Card.Text>
         <p> 937cc<br/>
         112.4Bhp<br/>
         200KG<br/>
         price:15,60,000
         </p>
        </Card.Text>
        
      </Card.Body>
      </Card>
      </div>
      <div>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={v2} />
      <Card.Body>
        <Card.Title>Ducati Multistrada V4</Card.Title>
        <Card.Text><p> 1,158cc<br/>
         167.62Bhp<br/>
         240KG<br/>
         price:21,50,000
         </p>
         
        </Card.Text>
       
      </Card.Body>
      </Card>
      </div>
    </div>
    </div>
  );
}

export default sports
