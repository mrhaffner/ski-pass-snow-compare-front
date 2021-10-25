import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import MobileAccordion from '../components/MobileAccordion';
import { fetchResortData, fetchWeather } from '../services/getData';
import { Resort } from '../types';
import { getPassSnowTotal } from '../utilities/math';

interface Props {
  ikon: Resort[];
  epic: Resort[];
}

const Home = ({ ikon, epic }: Props) => {
  return (
    <Container sx={{ marginY: 4 }}>
      <Typography variant="h5" component="h1" gutterBottom align="center">
        Epic vs Ikon
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline',
        }}
        mb={1}
      >
        <Typography component="h2">Epic Base Resorts</Typography>
        <Typography>Total Snow: {getPassSnowTotal(epic)}"</Typography>
      </Box>
      {/* have a component who's job it is to decide what to map here? */}
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
      >
        <Typography component="h2">IKON Base Resorts</Typography>
        <Typography>Total Snow: {getPassSnowTotal(ikon)}"</Typography>
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
