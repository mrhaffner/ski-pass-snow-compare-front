import { AccordionDetails, Typography } from '@mui/material';
import { WiSnowflakeCold } from 'react-icons/wi';
import { WiStrongWind } from 'react-icons/wi';
import { IconContext } from 'react-icons';
import { Box } from '@mui/system';

interface Props {
  weekDay: String;
  dailySnow: number;
  highTemp: number;
  lowTemp: number;
  wind: number;
}

const MobileAccordionDetails = ({
  weekDay,
  dailySnow,
  highTemp,
  lowTemp,
  wind,
}: Props) => {
  return (
    <AccordionDetails sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Typography sx={{ flexShrink: 0, alignSelf: 'center' }}>
        {weekDay}
      </Typography>
      <Box sx={{ display: 'flex' }}>
        <IconContext.Provider value={{ size: '2rem' }}>
          <WiSnowflakeCold />
        </IconContext.Provider>
        <Typography sx={{ flexShrink: 0, alignSelf: 'center' }}>
          {dailySnow}"
        </Typography>
      </Box>
      <Box sx={{ display: 'flex' }}>
        <IconContext.Provider value={{ size: '2rem' }}>
          <WiStrongWind />
        </IconContext.Provider>
        <Typography sx={{ flexShrink: 0, alignSelf: 'center' }}>
          {wind} mph
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', gap: '6px' }}>
        <Typography sx={{ flexShrink: 0, alignSelf: 'center' }}>
          {highTemp}°
        </Typography>
        <Typography sx={{ flexShrink: 0, alignSelf: 'center' }}>
          {lowTemp}°
        </Typography>
      </Box>
    </AccordionDetails>
  );
};

export default MobileAccordionDetails;
