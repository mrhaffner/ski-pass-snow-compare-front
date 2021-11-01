import {
  Container,
  Link,
  Stack,
  Typography,
  useMediaQuery,
} from '@mui/material';
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
      <Box sx={{ width: '100%', paddingBottom: '4rem' }}>
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
            width={matches ? 350 : 250}
            height={matches ? 350 : 250}
            alt="Forecast Your Snow"
          />
        </Box>
        <Container maxWidth="xl" sx={{ paddingBottom: '100px' }}>
          <Stack sx={{ width: '100%' }} direction={matches ? 'row' : 'column'}>
            <Container maxWidth="sm" sx={{ padding: 0 }}>
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
                <Typography>
                  7 Day Snow:{' '}
                  <span style={{ fontWeight: 600 }}>
                    {getPassSnowTotal(epic)}&quot;
                  </span>
                </Typography>
              </Box>
              {epic.map((r: Resort) => (
                <MobileAccordion resort={r} key={r.id} />
              ))}
            </Container>
            <Container maxWidth="sm" sx={{ padding: 0 }}>
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
                <Typography>
                  7 Day Snow:{' '}
                  <span style={{ fontWeight: 600 }}>
                    {getPassSnowTotal(ikon)}&quot;
                  </span>
                </Typography>
              </Box>
              {ikon.map((r: Resort) => (
                <MobileAccordion resort={r} key={r.id} />
              ))}
            </Container>
          </Stack>
        </Container>
      </Box>
      <footer
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          height: matches ? '4rem ' : '7rem',
          backgroundColor: '#014574',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <Stack
          direction={matches ? 'row' : 'column'}
          sx={{ width: '100%', height: '100%' }}
        >
          <Box
            width={matches ? '50%' : '100%'}
            height="100%"
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography fontWeight={600} pr="4px">
              © Matt Haffner -
            </Typography>
            <Link
              href="https://github.com/mrhaffner/ski-pass-snow-compare-front"
              fontWeight={600}
              color="#fff"
              underline="none"
              sx={{
                ':hover': {
                  backgroundColor: '#4FE2C1',
                  transition:
                    'color 0.2s linear,background 0.2s linear,border 0.2s linear',
                },
                ':after': {
                  backgroundColor: '#4FE2C1',
                  display: 'block',
                  height: '3px',
                  width: '161px',
                  opacity: 1,
                  content: '""',
                  transition: 'width .3s ease-in-out,opacity .3s ease-in-out',
                  position: 'absolute',
                },
              }}
            >
              Visit the project page!
            </Link>
          </Box>
          <Box
            width={matches ? '50%' : '100%'}
            height="100%"
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderTop: !matches ? 'thin double #87CEFA' : '',
            }}
          >
            <Typography fontWeight={600} pr="4px">
              Weather data brought to you by
            </Typography>
            <Link
              href="https://www.weatherbit.io/"
              fontWeight={600}
              color="#fff"
              underline="none"
              sx={{
                ':hover': {
                  backgroundColor: '#4FE2C1',
                  transition:
                    'color 0.2s linear,background 0.2s linear,border 0.2s linear',
                },
                ':after': {
                  backgroundColor: '#4FE2C1',
                  display: 'block',
                  height: '3px',
                  width: '80px',
                  opacity: 1,
                  content: '""',
                  transition: 'width .3s ease-in-out,opacity .3s ease-in-out',
                  position: 'absolute',
                },
              }}
            >
              Weatherbit
            </Link>
          </Box>
        </Stack>
      </footer>
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
