import { Container, Typography } from '@mui/material';
import MobileAccordion from '../components/MobileAccordion';
import { fetchResortData, fetchWeather } from '../services/getData';
import { Resort } from '../types';

interface Props {
  ikon: Resort[];
  epic: Resort[];
}

const Home = ({ ikon, epic }: Props) => {
  return (
    <Container>
      <Typography variant="h3" gutterBottom align="center">
        Epic vs Ikon
      </Typography>
      <Typography variant="h5" gutterBottom align="center">
        Epic Base Resorts
      </Typography>
      {/* have a component who's job it is to decide what to map here? */}
      {epic.map((r: Resort) => (
        <MobileAccordion resort={r} key={r.id} />
      ))}
      <Typography variant="h5" gutterBottom align="center">
        IKON Base Resorts
      </Typography>
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
