import { Container, Typography } from '@mui/material';
import type { NextPage } from 'next';
import { useEffect } from 'react';
import MobileAccordion from '../components/MobileAccordion';
import { fetchResortData, fetchWeather } from '../services/getData';
import { Resort } from '../types';

const Home: NextPage = () => {
  useEffect(() => {
    const hello = async () => {
      const { epicResorts, ikonResorts } = await fetchResortData();
      const epic = epicResorts.map((x: Resort) => x.id);
      const ikon = ikonResorts.map((x: Resort) => x.id);
      fetchWeather(epic);
      fetchWeather(ikon);
    };
    hello();
  });
  return (
    <Container>
      <Typography variant="h3" gutterBottom align="center">
        Epic vs Ikon
      </Typography>
      <Typography variant="h5" gutterBottom align="center">
        Epic Base Resorts
      </Typography>
      <MobileAccordion resortName="Vail" amountSnow={20} />
      <Typography variant="h5" gutterBottom align="center">
        IKON Base Resorts
      </Typography>
      <MobileAccordion resortName="Vail" amountSnow={20} />
    </Container>
  );
};

export default Home;
