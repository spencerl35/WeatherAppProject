import { Box, Button, Divider, Stack, Card, Typography } from '@mui/material';
import NorthIcon from '@mui/icons-material/North';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import NorthWestIcon from '@mui/icons-material/NorthWest';
import EastIcon from '@mui/icons-material/East';
import SouthIcon from '@mui/icons-material/South';
import SouthEastIcon from '@mui/icons-material/SouthEast';
import SouthWestIcon from '@mui/icons-material/SouthWest';
import WestIcon from '@mui/icons-material/West';
import * as React from 'react';
import {dailyWeatherData, hourlyPeriods, uvVal} from './apiProcessing';
import HourComponent from './HourComponent';

const WindDirectionIcon = ({day}) => {
    let direction = day.windDirection;
    if(direction.length > 2) {
        direction = direction.substring(1);
    }

        if(direction === 'N') {
            return <NorthIcon sx={{fontSize: 70}}/>;
        } else if(direction === 'NE') {
            return <NorthEastIcon sx={{fontSize: 70}}/>;
        } else if (direction === 'NW') {
            return <NorthWestIcon sx={{fontSize: 70}}/>;
        } else if (direction === 'E') {
            return <EastIcon sx={{fontSize: 70}}/>;
        } else if (direction === 'S') {
            return <SouthIcon sx={{fontSize: 70}}/>;
        } else if (direction === 'SE') {
            return <SouthEastIcon sx={{fontSize: 70}}/>;
        } else if (direction === 'SW') {
            return <SouthWestIcon sx={{fontSize: 70}}/>;
        } else if (direction === 'W') {
            return <WestIcon sx={{fontSize: 70}}/>;
        }
}

function WeatherDisplay({ setHomePage }) { 
return(
<Box sx={{background: 'linear-gradient(to bottom right, #15719f, #95d6ea)', height: '100vh', width: '100vw', display: 'flex', flexDirection: 'column' , justifyContent: 'space-around'}}>
    <Button onClick={() => setHomePage(true)} variant='filled' sx={{backgroundColor: 'white', color: 'black', align: 'center', ":hover": {backgroundColor: '#F8F83E'}, position: 'relative', left: '1vw', height: '4vh', width: '98vw', fontSize: '2vh'}}>
        Choose New Location
    </Button>
    <Box sx={{position: 'relative', left: '1vw', background: '#15719f', display: 'flex', flexDirection: 'column', width: '98vw', height: '92vh', borderRadius: '25px'}}>
        <Box sx={{padding: '10px 10px'}}>
            <Stack direction={'row'} spacing={2} sx={{ overflow: 'auto'}}>
                <HourComponent period={hourlyPeriods[0]}/>
                <HourComponent period={hourlyPeriods[1]}/>
                <HourComponent period={hourlyPeriods[2]}/>
                <HourComponent period={hourlyPeriods[3]}/>
                <HourComponent period={hourlyPeriods[4]}/>
                <HourComponent period={hourlyPeriods[5]}/>
                <HourComponent period={hourlyPeriods[6]}/>
                <HourComponent period={hourlyPeriods[7]}/>
                <HourComponent period={hourlyPeriods[8]}/>
                <HourComponent period={hourlyPeriods[9]}/>
                <HourComponent period={hourlyPeriods[10]}/>
                <HourComponent period={hourlyPeriods[11]}/>
            </Stack>
        </Box>
        <Divider/>
        <Box height={'100%'} sx={{padding: '10px 10px'}}>
            <Stack direction={'row'} spacing={2} justifyContent={'space-evenly'} alignContent={'stretch'} height={'100%'} sx={{overflow: 'auto'}}>
                <Card sx={{flexBasis: '20%', borderRadius: 4, display: 'flex', justifyContent: 'center', minWidth: '180px', alignItems: 'center'}}>
                    <Box textAlign={'center'} sx={{display: 'flex', justifyContent: 'space-around', flexDirection: 'column', width: '90%', height: '70%'}}>
                        <Box>
                            <Typography variant='h5'>Daily Temperature</Typography>
                        </Box>
                        <Divider/>
                        <Box>
                            <Typography variant='h5'>Todays temperature is</Typography>
                            <Typography variant='h4'>{dailyWeatherData.temp}&deg;F</Typography>
                        </Box>
                    </Box>
                </Card>
                <Card sx={{flexBasis: '20%', borderRadius: 4, display: 'flex', justifyContent: 'center', minWidth: '180px', alignItems: 'center'}}>
                    <Box textAlign={'center'} sx={{display: 'flex', justifyContent: 'space-around', flexDirection: 'column', width: '90%', height: '70%'}}>
                        <Box>
                            <Typography variant='h5'>Dew</Typography>
                            <Typography variant='h5'>Point</Typography>
                        </Box>
                        <Divider/>
                        <Box>
                            <Typography variant='h5'>Todays dew point is</Typography>
                            <Typography variant='h4'>{dailyWeatherData.dewPoint}&deg;F</Typography>
                        </Box>
                    </Box>
                </Card>
                <Card sx={{flexBasis: '20%', borderRadius: 4, display: 'flex', justifyContent: 'center', minWidth: '180px', alignItems: 'center'}}>
                    <Box textAlign={'center'} sx={{display: 'flex', justifyContent: 'space-around', flexDirection: 'column', width: '90%', height: '70%'}}>
                        <Box>
                            <Typography variant='h5'>Relative Humidity</Typography>
                        </Box>
                        <Divider/>
                        <Box>
                            <Typography variant='h5'>Todays humidity is</Typography>
                            <Typography variant='h4'>{dailyWeatherData.relHum}%</Typography>
                        </Box>
                    </Box>
                </Card>
                <Card sx={{flexBasis: '20%', borderRadius: 4, display: 'flex', justifyContent: 'center', minWidth: '180px', alignItems: 'center'}}>
                    <Box textAlign={'center'} sx={{display: 'flex', justifyContent: 'space-around', flexDirection: 'column', width: '90%', height: '70%'}}>
                        <Box>
                            <Typography variant='h5'>Wind Speed and Direction</Typography>
                        </Box>
                        <Divider/>
                        <Box>
                            <Typography variant='h5'>{dailyWeatherData.windSpeed}</Typography>
                            <WindDirectionIcon day={dailyWeatherData} sx={{fontSize: '34px'}}/>
                        </Box>
                    </Box>
                </Card>
                <Card sx={{flexBasis: '20%', borderRadius: 4, display: 'flex', justifyContent: 'center', minWidth: '180px', alignItems: 'center'}}>
                    <Box textAlign={'center'} sx={{display: 'flex', justifyContent: 'space-around', flexDirection: 'column', width: '90%', height: '70%'}}>
                        <Box>
                            <Typography variant='h5'>Ultraviolet Index</Typography>
                        </Box>
                        <Divider/>
                        <Box>
                            <Typography variant='h5'>Todays UV index is</Typography>
                            <Typography variant='h4'>{uvVal}</Typography>
                        </Box>
                    </Box>
                </Card>
            </Stack>
        </Box>
    </Box>
</Box>
    )
}

export default WeatherDisplay;