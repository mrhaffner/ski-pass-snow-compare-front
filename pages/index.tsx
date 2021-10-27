import { Container, Stack, Typography, useMediaQuery } from '@mui/material';
import { Box, useTheme } from '@mui/system';
import MobileAccordion from '../components/MobileAccordion';
import { fetchResortData, fetchWeather } from '../services/getData';
import { Resort } from '../types';
import { getPassSnowTotal } from '../utilities/math';
import Image from 'next/image';
import TitleLogo from '../public/title.svg';

interface Props {
  ikon: Resort[];
  epic: Resort[];
}

const Home = ({ ikon, epic }: Props) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('lg'));
  return (
    <>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          my: '-55px',
        }}
      >
        <Image
          src={TitleLogo}
          width={250}
          height={250}
          alt="Forecast Your Snow"
        />
      </Box>
      <Container maxWidth="xl">
        <Stack sx={{ width: '100%' }} direction={matches ? 'row' : 'column'}>
          <Container maxWidth="sm">
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
              }}
              mb={1}
              color="white"
            >
              <Typography variant="h6" component="h2">
                Epic Base Resorts
              </Typography>
              <Typography>Total Snow: {getPassSnowTotal(epic)}"</Typography>
            </Box>
            {epic.map((r: Resort) => (
              <MobileAccordion resort={r} key={r.id} />
            ))}
          </Container>
          <Container maxWidth="sm">
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
              }}
              mt={matches ? 0 : 3}
              mb={1}
              color="white"
            >
              <Typography variant="h6" component="h2">
                IKON Base Resorts
              </Typography>
              <Typography>7 Day Snow: {getPassSnowTotal(ikon)}"</Typography>
            </Box>
            {ikon.map((r: Resort) => (
              <MobileAccordion resort={r} key={r.id} />
            ))}
          </Container>
        </Stack>
      </Container>
    </>
  );
};

export const getStaticProps = async () => {
  const { epicResorts, ikonResorts } = await fetchResortData();
  const ikon = await fetchWeather(ikonResorts);
  const epic = await fetchWeather(epicResorts);

  return { props: { ikon, epic } };
};

export default Home;
