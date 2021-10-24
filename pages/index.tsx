import { Container, Typography } from '@mui/material';
import type { NextPage } from 'next';
import MobileAccordion from '../components/MobileAccordion';

const Home: NextPage = () => {
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
