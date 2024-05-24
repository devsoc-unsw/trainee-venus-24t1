import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

// eslint-disable-next-line react/prop-types
const NavBar = ({ setStatus }) => {
  const [value, setValue] = React.useState('plan');

  const handleChange = (event, newValue) => {
    if (newValue === 'about') {
      setStatus('about');
    } else {
      setStatus('plan');
    }
    setValue(newValue);
  };
  // console.log(value);

  return (
    <Box sx={{ width: '100%', backgroundColor: 'rgb(90, 101, 234)' }}>
      <Tabs value={value} onChange={handleChange} textColor='secondary' indicatorColor='secondary' centered variant='fullWidth'>
        <Tab value='about' label='About Time2Gather' sx={{ textTransform: 'none', color: 'white', fontWeight: 'bold', fontSize: 'small' }} />
        <Tab value='plan' label='Plan New Event' sx={{ textTransform: 'none', color: 'white', fontWeight: 'bold', fontSize: 'small' }} />
      </Tabs>
    </Box>
  );
};

export default NavBar;
