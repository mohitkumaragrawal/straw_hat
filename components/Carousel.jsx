import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material';

function Example(props) {
  var items = [
    {
      name: ' C1',
      description: 'Probably the most random thing you have ever seen!'
    },
    {
      name: 'C2',
      description: 'Best action movie ever!'
    }
  ];

  return (
    <div
      style={{
        width: '100vw',
        display: 'inline-block',
        alignSelf: 'center',
        height: '30vh',
        backgroundColor: '#3a3a3a73'
      }}>
      <Carousel>
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </div>
  );
}

function Item(props) {
  return (
    <div>
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>

      <Button className="CheckButton">Check it out!</Button>
    </div>
  );
}
export default Example;
