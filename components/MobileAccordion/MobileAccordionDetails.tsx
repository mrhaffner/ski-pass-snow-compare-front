import { AccordionDetails, Stack, Typography } from '@mui/material';
import { AcUnit, Air } from '@mui/icons-material';
import { Box } from '@mui/system';
import { MobileDay, Weather } from '../../types';

interface Props {
  weather: Weather;
  day: MobileDay;
}

const MobileAccordionDetails = ({ weather, day }: Props) => {
  return (
    <AccordionDetails>
      <Stack direction="row" justifyContent="space-between">
        <Typography sx={{ flexShrink: 0, alignSelf: 'center', width: '25%' }}>
          {day}
        </Typography>
        <Box sx={{ display: 'flex', width: '25%' }}>
          <AcUnit sx={{ fontSize: 18, alignSelf: 'center' }} />
          <Typography sx={{ flexShrink: 0, alignSelf: 'center' }}>
            {weather.snow}"
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', width: '25%' }}>
          <Air sx={{ fontSize: 20, alignSelf: 'center' }} />
          <Typography sx={{ flexShrink: 0, alignSelf: 'center' }}>
            {weather.wind_gust_spd} mph
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            gap: '6px',
            width: '25%',
            justifyContent: 'flex-end',
          }}
        >
          <Typography sx={{ flexShrink: 0, alignSelf: 'center' }}>
            {weather.high_temp}°
          </Typography>
          <Typography sx={{ flexShrink: 0, alignSelf: 'center' }}>
            {weather.min_temp}°
          </Typography>
        </Box>
      </Stack>
    </AccordionDetails>
  );
};

export default MobileAccordionDetails;
