import { AccordionDetails, Typography } from '@mui/material';
import { WiSnowflakeCold } from 'react-icons/wi';
import { WiStrongWind } from 'react-icons/wi';
import { IconContext } from 'react-icons';
import { Box } from '@mui/system';
import { MobileDay, Weather } from '../../types';

interface Props {
  weather: Weather;
  day: MobileDay;
}

const MobileAccordionDetails = ({ weather, day }: Props) => {
  return (
    <AccordionDetails sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Typography sx={{ flexShrink: 0, alignSelf: 'center' }}>{day}</Typography>
      <Box sx={{ display: 'flex' }}>
        <IconContext.Provider value={{ size: '2rem' }}>
          <WiSnowflakeCold />
          {/* conditional */}
        </IconContext.Provider>
        <Typography sx={{ flexShrink: 0, alignSelf: 'center' }}>
          {weather.snow}"{/* convert to freedom */}
        </Typography>
      </Box>
      <Box sx={{ display: 'flex' }}>
        <IconContext.Provider value={{ size: '2rem' }}>
          <WiStrongWind />
        </IconContext.Provider>
        <Typography sx={{ flexShrink: 0, alignSelf: 'center' }}>
          {weather.wind_gust_speed} mph
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', gap: '6px' }}>
        <Typography sx={{ flexShrink: 0, alignSelf: 'center' }}>
          {weather.high_temp}°
        </Typography>
        <Typography sx={{ flexShrink: 0, alignSelf: 'center' }}>
          {weather.min_temp}°
        </Typography>
      </Box>
    </AccordionDetails>
  );
};

export default MobileAccordionDetails;
