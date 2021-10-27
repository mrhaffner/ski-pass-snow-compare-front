import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
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
  return (
    <Container maxWidth="sm" sx={{ marginY: 4 }}>
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
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline',
        }}
        mt={3}
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
  );
};

export const getStaticProps = async () => {
  const { epicResorts, ikonResorts } = await fetchResortData();
  const ikon = await fetchWeather(ikonResorts);
  const epic = await fetchWeather(epicResorts);

  return { props: { ikon, epic } };
};

export default Home;
