import { useState } from 'react';
import { Button, TextField, Typography, Box } from '@mui/material';

import axios from 'axios';

export default function AddTheatre() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [website, setWebsite] = useState('');

  const [loading, setLoading] = useState(false);

  const handleSubmit = async e => {
    setLoading(true);

    e.preventDefault();
    const theatre = {
      name,
      address,
      city,
      state,
      zip,
      website,
      row: 7,
      column: 20
    };
    console.log(theatre);

    const res = await axios.post('/api/theatre/addTheatre', theatre);
    console.log(res);
    res.status === 200 ? alert('Theatre added successfully') : alert('Error adding theatre');

    setName('');
    setAddress('');
    setCity('');
    setState('');
    setZip('');
    setWebsite('');

    setLoading(false);
  };

  return (
    <>
      <Typography variant="h3" sx={{ pt: 3 }}>
        Add a Theater
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box py={2}>
          <Typography variant="h6">Theater Name</Typography>
          <TextField fullWidth value={name} onChange={e => setName(e.target.value)} />
        </Box>
        <Box py={2}>
          <Typography variant="h6">Theater Address</Typography>
          <TextField fullWidth value={address} onChange={e => setAddress(e.target.value)} />
        </Box>
        <Box py={2}>
          <Typography variant="h6">City</Typography>
          <TextField fullWidth value={city} onChange={e => setCity(e.target.value)} />
        </Box>
        <Box py={2}>
          <Typography variant="h6">State</Typography>
          <TextField fullWidth value={state} onChange={e => setState(e.target.value)} />
        </Box>
        <Box py={2}>
          <Typography variant="h6">Zip</Typography>
          <TextField fullWidth value={zip} onChange={e => setZip(e.target.value)} />
        </Box>
        <Box py={2}>
          <Typography variant="h6">Website</Typography>
          <TextField fullWidth value={website} onChange={e => setWebsite(e.target.value)} />
        </Box>

        <Button my={5} variant="contained" type="submit" disabled={loading}>
          Add
        </Button>
      </form>
    </>
  );
}
