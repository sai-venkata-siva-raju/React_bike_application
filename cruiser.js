import React from 'react';
import Card from 'react-bootstrap/Card';
import desert from './desert-sled.webp';
import urban from './scrambler-urban-motard-right-front-three-quarter-2.webp';
import scrambler from './1100.webp';
import night from './night.webp';
import icon from './icon.webp';
import diavel from './diavel.webp';


const cruiser = () => {
  return (
    <div>
      <center>
        <br/> <br/>  
      <h1>welcome to cruiser Bikes by Ducati</h1></center>
      <br/>
      <div className='cruiser'>
        <div>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={desert} />
      <Card.Body>
        <Card.Title>Ducati Scrambler Desert sled</Card.Title>
        <Card.Text>
         <p> 803cc<br/>
         71Bhp<br/>
         209KG<br/>
         price:12,59,000
         </p>
        </Card.Text>
        
      </Card.Body>
      </Card>
      </div>
      <div>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={urban} />
      <Card.Body>
        <Card.Title>Ducati Scrambler Urban-motard</Card.Title>
        <Card.Text><p> 803cc<br/>
         71Bhp<br/>
         209KG<br/>
         price:12,00,000
         </p>
         
        </Card.Text>
       
      </Card.Body>
      </Card>
      </div>
      <div>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={scrambler}/>
      <Card.Body>
        <Card.Title>Ducati Scrambler 1100</Card.Title>
        <Card.Text>
        <p> 1,079cc<br/>
         84.48Bhp<br/>
         206KG<br/>
         price:13,40,000
         </p>
         
          
          
        </Card.Text>
       
      </Card.Body>
      </Card>
      </div>
      <div>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={night} />
      <Card.Body>
        <Card.Title>Ducati Scrambler Night shift</Card.Title>
        <Card.Text>
        <p> 803cc<br/>
         71.8Bhp<br/>
         192KG<br/>
         price:11,70,000
         </p>
        </Card.Text>
        
      </Card.Body>
      </Card>
      </div>
      <div>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={icon} />
      <Card.Body>
        <Card.Title>Ducati scrambler icon</Card.Title>
        <Card.Text><p> 803cc<br/>
         71.8Bhp<br/>
         189KG<br/>
         price:9,40,000
         </p>
         
        </Card.Text>
        
      </Card.Body>
      </Card>
      </div>
      <div>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={diavel} />
      <Card.Body>
        <Card.Title>Ducati Diavel 1260</Card.Title>
        <Card.Text>
        <p> 1,262cc<br/>
         160Bhp<br/>
         247KG<br/>
         price:21,49,000
         </p>
         
        </Card.Text>
      
      </Card.Body>
      </Card>
      </div>
      </div>
      
    </div>
  )
}

export default cruiser
