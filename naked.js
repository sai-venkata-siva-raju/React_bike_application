import React from 'react';
import Card from 'react-bootstrap/Card';
import hyper from './hyper.webp';
import multiv4 from './multiv4.webp';
import desertx from'./desertx.webp';
import multiv2 from './multiv2.webp';

const naked = () => {
  return (
  
    <div>
      <center>
      <br/>
      <h1>welcome to adventure Bikes by Ducati</h1>
      <br/>
      </center>
      <div className='cruiser'>
        <div>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={hyper} />
      <Card.Body>
        <Card.Title>
Ducati Hypermotard 950</Card.Title>
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
      <Card.Img variant="top" src={multiv4} />
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
      <div>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={desertx}/>
      <Card.Body>
        <Card.Title>Ducati DesertX</Card.Title>
        <Card.Text>
        <p> 937cc<br/>
         108.6Bhp<br/>
         223KG<br/>
         price:17,90,000
         </p>
         
          
          
        </Card.Text>
       
      </Card.Body>
      </Card>
      </div>
      <div>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={multiv2} />
      <Card.Body>
        <Card.Title>Ducati Multistrada V2</Card.Title>
        <Card.Text>
        <p> 937cc<br/>
         111.3Bhp<br/>
         222KG<br/>
         price:16,05,000
         </p>
        </Card.Text>
        
      </Card.Body>
      </Card>
      </div>
    </div>
    </div>
  
);
}

export default naked
