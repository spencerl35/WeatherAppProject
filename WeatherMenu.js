import { Box, MenuItem, FormControl, InputLabel, Select, Typography, Button, OutlinedInput, ButtonGroup} from '@mui/material'; 
import * as React from 'react';
import Fade from '@mui/material/Fade';
import SendIcon from '@mui/icons-material/Send';
import {geoLocation} from './apiProcessing';
import {
  APIProvider,
  useMapsLibrary
} from "@vis.gl/react-google-maps";

const API_KEY = "top secret";

function WeatherMenu({ setHomePage }) {

  const PlaceAutocomplete = ({ inputVal, onPlaceSelect }) => {
    const [placeAutocomplete, setPlaceAutocomplete] = React.useState(null);
    const inputRef = React.useRef(null);
    const [inputValue, setInputValue] = React.useState(inputVal);
    const places = useMapsLibrary("places");
  
    React.useEffect(() => {
      if (!places || !inputRef.current) return;
  
      const options = {
        componentRestrictions: { country: "us"},
        fields: ["name"],
        types: ["locality"]
      };
  
      setPlaceAutocomplete(new places.Autocomplete(inputRef.current, options));
    }, [places, setPlaceAutocomplete, inputRef]);
    React.useEffect(() => {
      if (!placeAutocomplete) return;
  
      placeAutocomplete.addListener("place_changed", () => {
        const place = placeAutocomplete.getPlace();
        onPlaceSelect(place);
        setInputValue(inputVal);
      });
    }, [onPlaceSelect, placeAutocomplete, inputVal]);

    return (
      <div className="autocomplete-container">
        <FormControl>
          <InputLabel id='cityLabelTemp' sx={{color: 'white', '&.Mui-focused': {color: 'white'}}}>City Name</InputLabel>
          <OutlinedInput inputRef={inputRef} label='City Name' labelId='cityLabelTemp' value={inputValue} onChange={(e) => setInputValue(e.target.value)} sx={{backgroundColor: '#15719F', color: 'white','&.MuiOutlinedInput-root': {borderRadius: 50}, '& .MuiOutlinedInput-notchedOutline , &.Mui-focused .MuiOutlinedInput-notchedOutline , &:hover .MuiOutlinedInput-notchedOutline': {borderColor: 'white'}}}></OutlinedInput>
        </FormControl>
      </div>
    );
  };

  const [forceRender, setForceRender] = React.useState(false);

  const toggleForceRender = () => {
    setForceRender(prevState => !prevState);
  }

  const [city, setCity] = React.useState('');

  const AutocompleteParentComponent = ({city, setCity}) => {
    const [selectedPlace, setSelectedPlace] = React.useState(city)

    const handlePlaceSelect = React.useCallback((place) => {
      const name = place.name;
      const splitAPIResult = name.split(',');
      setCity(splitAPIResult[0].trim());
      setState(splitAPIResult[1].trim());
      setSelectedPlace(splitAPIResult[0].trim());
    }, [setCity, setSelectedPlace])
    return(
      <div>
        <PlaceAutocomplete inputVal={selectedPlace} onPlaceSelect={handlePlaceSelect}/>
      </div>
    )
  }

  const [state, setState] = React.useState('');

  const handleStateChange = React.useCallback((event) => {
    setState(event.target.value);
  }, [setState]);

  const clearFields = React.useCallback(() => {
    setCity('');
    setState('');
    toggleForceRender();
  }, [setCity, setState])

  const handleClick = React.useCallback(async () => {
    const error = await geoLocation(`${city}, ${state}`);
    setCity('Choose real location.');
    setState('');
    setHomePage(error != null);
  }, [city, state, setCity, setState, setHomePage])

  const states = [{value: 'AL', label: 'Alabama'},{value: 'AK', label: 'Alaska'},{value: 'AZ', label: 'Arizona'},{value: 'AR', label: 'Arkansas'},{value: 'CA', label: 'California'},{value: 'CO', label: 'Coloado'},{value: 'CT', label: 'Connecticut'},{value: 'DE', label: 'Delaware'},{value: 'DC', label: 'D.C.'},{value: 'FL', label: 'Florida'},{value: 'GA', label: 'Geogia'},{value: 'HI', label: 'Hawaii'},{value: 'ID', label: 'Idaho'},{value: 'IL', label: 'Illinois'},{value: 'IN', label: 'Indiana'},{value: 'IA', label: 'Iowa'},{value: 'KS', label: 'Kansas'},{value: 'KY', label: 'Kenucky'},{value: 'LA', label: 'Louisiana'},{value: 'ME', label: 'Maine'},{value: 'MD', label: 'Maryland'},{value: 'MA', label: 'Masschusetts'},{value: 'MI', label: 'Michigan'},{value: 'MN', label: 'Minnesota'},{value: 'MS', label: 'Mississippi'},{value: 'MO', label: 'Missouri'},{value: 'MT', label: 'Montana'},{value: 'NE', label: 'Nebraska'},{value: 'NV', label: 'Nevada'},{value: 'NH', label: 'New Hampshire'},{value: 'NJ', label: 'New Jersey'},{value: 'NM', label: 'New Mexico'},{value: 'NY', label: 'New York'},{value: 'NC', label: 'North Carolina'},{value: 'ND', label: 'North Dakota'},{value: 'OH', label: 'Ohio'},{value: 'OK', label: 'Oklahoma'},{value: 'OR', label: 'Oregon'},{value: 'PA', label: 'Pennsylvania'},{value: 'RI', label: 'Rhode Island'},{value: 'SC', label: 'South Carolina'},{value: 'SD', label: 'South Dakota'},{value: 'TN', label: 'Tennessee'},{value: 'TX', label: 'Texas'},{value: 'UT', label: 'Utah'},{value: 'VT', label: 'Vermont'},{value: 'VA', label: 'Virginia'},{value: 'WA', label: 'Washington'},{value: 'WV', label: 'West Virginia'},{value: 'WI', label: 'Wisconsin'},{value: 'WY', label: 'Wyoming'}];

  return(
  <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center',backgroundImage: 'linear-gradient(to bottom right, #15719f, #95d6ea)', height: '100vh', width: '100vw'}}>
      {/*Contains the title for the page*/}
      <Box sx={{alignItems: 'center'}}>
        <Box sx={{border: 5, borderRadius: '25px', backgroundImage: 'url(https://images.pexels.com/photos/1431822/pexels-photo-1431822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)', backgroundPosition: 'top', backgroundSize: 'cover', color: 'white', minHeight: '20vh', maxWidth: '95vw', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'auto'}}>
          <Fade in={true} timeout={5000}>
              <Typography variant='h1' align='center' sx={{width: '95%', height: '95%'}}>The Weather Radar</Typography>
          </Fade>
        </Box>
      </Box>
      {/*Contains the address component*/}
      <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
        <Box>
          <APIProvider
            apiKey={API_KEY}
            solutionChannel="GMP_devsite_samples_v3_rgmautocomplete"
          >
              
            <AutocompleteParentComponent forceRendering={forceRender} city={city} setCity={setCity}/>
          </APIProvider>
        </Box>
        {/*Contains the state selection component*/}
        <Box>
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
        </Box>
      </Box>
      {/*Contains the submit button to go to the actual weather page*/}
      <Box sx={{justifyContent: 'center', display: 'flex'}}>
        <ButtonGroup spacing='5vw'>
          <Button onClick={clearFields} variant='contained' size='large' sx={{backgroundColor: 'white', color:'black', ':hover': {backgroundColor: '#cc0000'}}}>
            Clear
          </Button>
          <Button onClick={handleClick} variant='contained' endIcon={<SendIcon />} size='large' sx={{backgroundColor: 'white', color: 'black', align: 'center', ":hover": {backgroundColor: '#F8F83E'}}}>
            Find Weather
          </Button>
        </ButtonGroup>
      </Box>
  </Box>
  )
}

export default WeatherMenu;
