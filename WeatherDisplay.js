import { Box, Button, Divider, Stack, Card, Typography } from '@mui/material';
import NightlightIcon from '@mui/icons-material/Nightlight';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import SouthWestIcon from '@mui/icons-material/SouthWest';
import * as React from 'react';

function WeatherDisplay() {

    let zeroPeriod = {'precipProb': '35%', 'icon': 'WbSunnyIcon', 'temp': 67, 'time': '12 PM'};

    const HourlyIconComponent = ({period}) => {
        if(period.icon === 'NightlightIcon') {
            return <NightlightIcon/>;
        } else if(period.icon === 'WbSunnyIcon') {
            return <WbSunnyIcon/>
        } else {
            return null;
        }
    }

return(
<Box sx={{background: 'linear-gradient(to bottom right, #15719f, #95d6ea)', height: '100vh', width: '100vw', display: 'flex', flexDirection: 'column' , justifyContent: 'space-around'}}>
    <Button variant='filled' sx={{backgroundColor: 'white', color: 'black', align: 'center', ":hover": {backgroundColor: '#F8F83E'}, position: 'relative', left: '1vw', height: '4vh', width: '98vw', fontSize: '2vh'}}>
        Choose New Location
    </Button>
    <Box sx={{position: 'relative', left: '1vw', background: '#15719f', display: 'flex', flexDirection: 'column', width: '98vw', height: '92vh', borderRadius: '25px'}}>
        <Box sx={{padding: '10px 10px'}}>
            <Stack direction={'row'} spacing={2} sx={{ overflow: 'auto'}}>
                <Card sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '10px 10px', minWidth: '13vw', minHeight: '14vh' , borderRadius: '20px'}}>
                    <Box sx={{display: 'flex', justifyContent: 'center'}}>
                        <Typography>{zeroPeriod.time}</Typography>
                    </Box>
                    <Box alignItems={'center'} sx={{display: 'flex', flexDirection: 'column'}}>
                        <HourlyIconComponent period={zeroPeriod}/>
                        <Typography>{zeroPeriod.precipProb}</Typography>
                    </Box>
                    <Divider/>
                    <Box sx={{textAlign: 'center'}}>
                        <Typography>{zeroPeriod.temp}&deg;F</Typography>
                    </Box>
                </Card>
                <Card sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '10px 10px', minWidth: '13vw', borderRadius: '20px'}}>
                    <Box sx={{display: 'flex', justifyContent: 'center'}}>
                        <Typography>1 PM</Typography>
                    </Box>
                    <Box sx={{display: 'flex', justifyContent: 'center'}}>
                        <NightlightIcon/>
                    </Box>
                    <Divider/>
                    <Box sx={{textAlign: 'center'}}>
                        <Typography>98&deg;F</Typography>
                    </Box>
                </Card>
                <Card sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '10px 10px', minWidth: '13vw', borderRadius: '20px'}}>
                    <Box sx={{display: 'flex', justifyContent: 'center'}}>
                        <Typography>2 PM</Typography>
                    </Box>
                    <Box sx={{display: 'flex', justifyContent: 'center'}}>
                        <NightlightIcon/>
                    </Box>
                    <Divider/>
                    <Box sx={{textAlign: 'center'}}>
                        <Typography>98&deg;F</Typography>
                    </Box>
                </Card>
                <Card sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '10px 10px', minWidth: '13vw', borderRadius: '20px'}}>
                    <Box sx={{display: 'flex', justifyContent: 'center'}}>
                        <Typography>3 PM</Typography>
                    </Box>
                    <Box sx={{display: 'flex', justifyContent: 'center'}}>
                        <NightlightIcon/>
                    </Box>
                    <Divider/>
                    <Box sx={{textAlign: 'center'}}>
                        <Typography>98&deg;F</Typography>
                    </Box>
                </Card>
                <Card sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '10px 10px', minWidth: '13vw', borderRadius: '20px'}}>
                    <Box sx={{display: 'flex', justifyContent: 'center'}}>
                        <Typography>4 PM</Typography>
                    </Box>
                    <Box sx={{display: 'flex', justifyContent: 'center'}}>
                        <NightlightIcon/>
                    </Box>
                    <Divider/>
                    <Box sx={{textAlign: 'center'}}>
                        <Typography>98&deg;F</Typography>
                    </Box>
                </Card>
                <Card sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '10px 10px', minWidth: '13vw', borderRadius: '20px'}}>
                    <Box sx={{display: 'flex', justifyContent: 'center'}}>
                        <Typography>5 PM</Typography>
                    </Box>
                    <Box sx={{display: 'flex', justifyContent: 'center'}}>
                        <NightlightIcon/>
                    </Box>
                    <Divider/>
                    <Box sx={{textAlign: 'center'}}>
                        <Typography>98&deg;F</Typography>
                    </Box>
                </Card>
                <Card sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '10px 10px', minWidth: '13vw', borderRadius: '20px'}}>
                    <Box sx={{display: 'flex', justifyContent: 'center'}}>
                        <Typography>6 PM</Typography>
                    </Box>
                    <Box sx={{display: 'flex', justifyContent: 'center'}}>
                        <NightlightIcon/>
                    </Box>
                    <Divider/>
                    <Box sx={{textAlign: 'center'}}>
                        <Typography>98&deg;F</Typography>
                    </Box>
                </Card>
                <Card sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '10px 10px', minWidth: '13vw', borderRadius: '20px'}}>
                    <Box sx={{display: 'flex', justifyContent: 'center'}}>
                        <Typography>7 PM</Typography>
                    </Box>
                    <Box sx={{display: 'flex', justifyContent: 'center'}}>
                        <NightlightIcon/>
                    </Box>
                    <Divider/>
                    <Box sx={{textAlign: 'center'}}>
                        <Typography>98&deg;F</Typography>
                    </Box>
                </Card>
                <Card sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '10px 10px', minWidth: '13vw', borderRadius: '20px'}}>
                    <Box sx={{display: 'flex', justifyContent: 'center'}}>
                        <Typography>8 PM</Typography>
                    </Box>
                    <Box sx={{display: 'flex', justifyContent: 'center'}}>
                        <NightlightIcon/>
                    </Box>
                    <Divider/>
                    <Box sx={{textAlign: 'center'}}>
                        <Typography>98&deg;F</Typography>
                    </Box>
                </Card>
                <Card sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '10px 10px', minWidth: '13vw', borderRadius: '20px'}}>
                    <Box sx={{display: 'flex', justifyContent: 'center'}}>
                        <Typography>9 PM</Typography>
                    </Box>
                    <Box sx={{display: 'flex', justifyContent: 'center'}}>
                        <NightlightIcon/>
                    </Box>
                    <Divider/>
                    <Box sx={{textAlign: 'center'}}>
                        <Typography>98&deg;F</Typography>
                    </Box>
                </Card>
                <Card sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '10px 10px', minWidth: '13vw', borderRadius: '20px'}}>
                    <Box sx={{display: 'flex', justifyContent: 'center'}}>
                        <Typography>10 PM</Typography>
                    </Box>
                    <Box sx={{display: 'flex', justifyContent: 'center'}}>
                        <NightlightIcon/>
                    </Box>
                    <Divider/>
                    <Box sx={{textAlign: 'center'}}>
                        <Typography>98&deg;F</Typography>
                    </Box>
                </Card>
                <Card sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '10px 10px', minWidth: '13vw', borderRadius: '20px'}}>
                    <Box sx={{display: 'flex', justifyContent: 'center'}}>
                        <Typography>11 PM</Typography>
                    </Box>
                    <Box sx={{display: 'flex', justifyContent: 'center'}}>
                        <NightlightIcon/>
                    </Box>
                    <Divider/>
                    <Box sx={{textAlign: 'center'}}>
                        <Typography>98&deg;F</Typography>
                    </Box>
                </Card>
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
                            <Typography variant='h4'>63&deg;F</Typography>
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
                            <Typography variant='h4'>69&deg;F</Typography>
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
                            <Typography variant='h4'>79%</Typography>
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
                            <Typography variant='h5'>5 to 10 Miles Per Hour</Typography>
                            <SouthWestIcon sx={{fontSize: '34px'}}/>
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
                            <Typography variant='h4'>9</Typography>
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