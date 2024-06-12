import { Box, MenuItem, FormControl, InputLabel, Select, TextField, Stack, Grid, Typography, Button, OutlinedInput, Divider, ButtonGroup} from '@mui/material'; 
import * as React from 'react';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { keyframes, css } from '@mui/system';
import Fade from '@mui/material/Fade';
import SendIcon from '@mui/icons-material/Send';
import { BorderColor } from '@mui/icons-material';

function WeatherMenu() {

  const [city, setCity] = React.useState('');

  const handleCityChange = (event) => {
    setCity(event.target.value);
  }

  const [state, setState] = React.useState('');

  const handleStateChange = (event) => {
    setState(event.target.value);
  };

  const clearFields = (event) => {
    setCity('');
    setState('');
  }

  const states = [
    {value: 'AL', label: 'Alabama'},
    {value: 'AK', label: 'Alaska'},
    {value: 'AZ', label: 'Arizona'},
    {value: 'AR', label: 'Arkansas'},
    {value: 'CA', label: 'California'},
    {value: 'CO', label: 'Coloado'},
    {value: 'CT', label: 'Connecticut'},
    {value: 'DE', label: 'Delaware'},
    {value: 'DC', label: 'D.C.'},
    {value: 'FL', label: 'Florida'},
    {value: 'GA', label: 'Geogia'},
    {value: 'HI', label: 'Hawaii'},
    {value: 'ID', label: 'Idaho'},
    {value: 'IL', label: 'Illinois'},
    {value: 'IN', label: 'Indiana'},
    {value: 'IA', label: 'Iowa'},
    {value: 'KS', label: 'Kansas'},
    {value: 'KY', label: 'Kenucky'},
    {value: 'LA', label: 'Louisiana'},
    {value: 'ME', label: 'Maine'},
    {value: 'MD', label: 'Maryland'},
    {value: 'MA', label: 'Masschusetts'},
    {value: 'MI', label: 'Michigan'},
    {value: 'MN', label: 'Minnesota'},
    {value: 'MS', label: 'Mississippi'},
    {value: 'MO', label: 'Missouri'},
    {value: 'MT', label: 'Montana'},
    {value: 'NE', label: 'Nebraska'},
    {value: 'NV', label: 'Nevada'},
    {value: 'NH', label: 'New Hampshire'},
    {value: 'NJ', label: 'New Jersey'},
    {value: 'NM', label: 'New Mexico'},
    {value: 'NY', label: 'New York'},
    {value: 'NC', label: 'North Carolina'},
    {value: 'ND', label: 'North Dakota'},
    {value: 'OH', label: 'Ohio'},
    {value: 'OK', label: 'Oklahoma'},
    {value: 'OR', label: 'Oregon'},
    {value: 'PA', label: 'Pennsylvania'},
    {value: 'RI', label: 'Rhode Island'},
    {value: 'SC', label: 'South Carolina'},
    {value: 'SD', label: 'South Dakota'},
    {value: 'TN', label: 'Tennessee'},
    {value: 'TX', label: 'Texas'},
    {value: 'UT', label: 'Utah'},
    {value: 'VT', label: 'Vermont'},
    {value: 'VA', label: 'Virginia'},
    {value: 'WA', label: 'Washington'},
    {value: 'WV', label: 'West Virginia'},
    {value: 'WI', label: 'Wisconsin'},
    {value: 'WY', label: 'Wyoming'}
  ];

  return(
  <Box sx={{backgroundImage: 'linear-gradient(to bottom right, #15719f, #95d6ea)', minHeight: '100vh', minWidth: '100vw', margin: '0%', padding: '0%'}}>
    <Grid2 container spacing={0} alignItems="center" justifyContent="space-between" sx={{minHeight: '100vh', minWidth: '100vw'}}>
      {/*Contains the title for the page*/}
      <Grid2 xs={12} sx={{paddingTop: '5vh', paddingLeft: '3vw', paddingRight: '3vw'}}>
        <Box sx={{border: 5, borderRadius: '25px', backgroundImage: 'url(https://images.pexels.com/photos/1431822/pexels-photo-1431822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)', backgroundPosition: 'top', backgroundSize: 'cover', color: 'white', minHeight: '20vh', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'auto'}}>
          <Fade in={true} timeout={5000}>
              <Typography variant='h1' align='center' sx={{maxWidth: '100%', maxHeight: '100%'}}>The Weather Service</Typography>
          </Fade>
        </Box>
      </Grid2>
      {/*Contains the address component*/}
      <Grid2 xs={6} sx={{paddingLeft: '5vw', justifyContent: 'flex-end', display: 'flex'}}>
        <FormControl>
          <InputLabel id='cityLabel' sx={{color: 'white', '&.Mui-focused': {color: 'white'}}}>City Name</InputLabel>
          <OutlinedInput label='City Name' labelId='cityLabel' value={city} onChange={handleCityChange} sx={{backgroundColor: '#15719F', color: 'white','&.MuiOutlinedInput-root': {borderRadius: 50}, '& .MuiOutlinedInput-notchedOutline , &.Mui-focused .MuiOutlinedInput-notchedOutline , &:hover .MuiOutlinedInput-notchedOutline': {borderColor: 'white'}}}></OutlinedInput>
        </FormControl>
      </Grid2>
      {/*Contains the state selection component*/}
      <Grid2 xs={6} sx={{paddingRight: '5vw'}}>
        <Box sx={{minWidth: '120px'}}>
          <FormControl sx={{minWidth: '120px', color: 'white'}}>
            <InputLabel id='stateLabel' sx={{color: 'white', '&.Mui-focused': {color: 'white'}}}>State</InputLabel>
            <Select variant= 'outlined' label='State' labelId='stateLabel' value={state}  onChange={handleStateChange}  sx={{backgroundColor: '#15719f', color: 'white', '& .MuiSelect-icon': {color: 'white'}, '&.MuiOutlinedInput-root': {borderRadius: 50}, '& .MuiOutlinedInput-notchedOutline , &.Mui-focused .MuiOutlinedInput-notchedOutline , &:hover .MuiOutlinedInput-notchedOutline': {borderColor: 'white'}}} >
            {states.map((state) => (
              <MenuItem key={state.value} value={state.value}>
                {state.label}
              </MenuItem>
            ))}
            </Select>
          </FormControl>
        </Box>
      </Grid2>
      {/*Contains the submit button to go to the actual weather page*/}
      <Grid2 xs={12} sx={{paddingTop: '7vh', paddingLeft: '5vw', paddingRight: '5vw', paddingBottom: '5vh', justifyContent: 'center', display: 'flex'}}>
        <ButtonGroup spacing='5vw'>
        <Button onClick={clearFields} variant='contained' size='large' sx={{backgroundColor: 'white', color:'black', ':hover': {backgroundColor: '#cc0000'}}}>
          Clear
        </Button>
        <Button variant='contained' endIcon={<SendIcon />} size='large' sx={{backgroundColor: 'white', color: 'black', align: 'center', ":hover": {backgroundColor: '#F8F83E'}}}>
          Find Weather
        </Button>
        </ButtonGroup>
      </Grid2>

    </Grid2>
  </Box>
  )
}

export default WeatherMenu;
