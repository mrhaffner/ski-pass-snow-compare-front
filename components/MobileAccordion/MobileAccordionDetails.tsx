import {
  AccordionDetails,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { AcUnit, Air } from '@mui/icons-material';
import { Box } from '@mui/system';
import { MobileDay, Weather } from '../../types';

interface Props {
  weather: Weather;
  day: MobileDay;
}

const MobileAccordionDetails = ({ weather, day }: Props) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <AccordionDetails
      sx={{
        background: 'rgba( 255, 255, 255, 0.25 )',
        backdropFilter: 'blur( 4px )',
        my: '3px',
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mb="-5px"
        mt="5px"
      >
        <Typography
          sx={{
            flexShrink: 0,
            alignSelf: 'center',
            width: matches ? '25%' : '22%',
          }}
        >
          {day}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            width: '25%',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '50px',
            }}
          >
            <AcUnit
              sx={{ fontSize: 18, alignSelf: 'center', color: 'white' }}
            />
            <Typography sx={{ flexShrink: 0, alignSelf: 'center' }}>
              {weather.snow}&quot;
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            width: matches ? '25%' : '28%',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              maxWidth: '75px',
            }}
          >
            <Air sx={{ fontSize: 20, alignSelf: 'center', color: 'white' }} />
            <Box sx={{ display: 'flex', gap: '2px' }}>
              <Typography sx={{ flexShrink: 0, alignSelf: 'center' }}>
                {weather.wind_gust_spd}
              </Typography>
              <Typography
                variant="body2"
                component="span"
                sx={{
                  flexShrink: 0,
                  alignSelf: 'center',
                }}
              >
                mph
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            gap: '6px',
            width: '25%',
            justifyContent: matches ? 'center' : 'flex-end',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '59px',
            }}
          >
            <Typography
              color="white"
              sx={{ flexShrink: 0, alignSelf: 'center' }}
            >
              {weather.high_temp}°
            </Typography>
            <Typography
              sx={{
                flexShrink: 0,
                alignSelf: 'center',
                color: 'rgba(255, 255, 255, 0.6)',
              }}
            >
              {weather.min_temp}°
            </Typography>
          </Box>
        </Box>
      </Stack>
    </AccordionDetails>
  );
};

export default MobileAccordionDetails;
