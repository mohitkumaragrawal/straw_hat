import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material';

import { useState, useEffect } from 'react';
import axios from 'axios';

function Example(props) {
  const [items, setItems] = useState([]);

  const fetchData = async function () {
    const response = await axios.get('https://api.tvmaze.com/search/shows?q=' + 'girls');
    setItems(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div
      style={{
        width: '100vw',
        display: 'inline-block',
        alignSelf: 'center',
        height: '350px'
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
  const extractImage = item => {
    if (item.show.image) {
      if (item.show.image.original) {
        return `url(${item.show.image.original})`;
      } else if (item.show.image.meium) {
        return `url(${item.show.image.medium})`;
      }
    }
    return '';
  };
  return (
    <div
      style={{
        backgroundColor: 'red',
        padding: '80px 30px',
        backgroundImage: extractImage(props.item),
        backgroundSize: 'cover'
      }}>
      <h2>{props.item.show.name}</h2>

      <Button className="CheckButton">Check it out!</Button>
    </div>
  );
}
export default Example;
