import { Box, Divider, Card, Typography } from '@mui/material';
import NightlightIcon from '@mui/icons-material/Nightlight';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CloudIcon from '@mui/icons-material/Cloud';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

const HourlyIconComponent = ({period}) => {
    if(period.icon === 'NightlightIcon') {
        return <NightlightIcon/>;
    } else if(period.icon === 'WbSunnyIcon') {
        return <WbSunnyIcon/>;
    } else if(period.icon === 'CloudIcon'){
        return <CloudIcon/>;
    } else if(period.icon === 'NightsStayIcon'){
        return <NightsStayIcon/>;
    } else if(period.icon === 'ThunderstormIcon'){
        return <ThunderstormIcon/>;
    }
}

const PrecipitationProb = ({prob}) => {
    if (prob === 0) {
        return null;
    } else {
        return <Typography>{prob + '%'}</Typography>;
    }
}

function HourComponent({period}) {
    return(
    <Card sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '10px 10px', minWidth: '13vw', minHeight: '14vh' , borderRadius: '20px'}}>
        <Box sx={{display: 'flex', justifyContent: 'center'}}>
            <Typography>{period.time}</Typography>
        </Box>
        <Box alignItems={'center'} sx={{display: 'flex', flexDirection: 'column'}}>
            <HourlyIconComponent period={period}/>
            <PrecipitationProb prob={period.precipProb}/>
        </Box>
        <Divider/>
        <Box sx={{textAlign: 'center'}}>
             <Typography>{period.temp}&deg;F</Typography>
        </Box>
    </Card>
    )
}   

export default HourComponent;
