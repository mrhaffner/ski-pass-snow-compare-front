import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import { Box } from '@mui/system';
import { WiSnowflakeCold } from 'react-icons/wi';
import { IconContext } from 'react-icons';
import MobileAccordionDetails from './MobileAccordionDetails';
import { Resort, Weather } from '../../types';
import { mobileDay } from '../../constants/days';

interface Props {
  resort: Resort;
}

const MobileAccordion = ({ resort }: Props) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Accordion
      expanded={expanded}
      onChange={() => setExpanded(expanded ? false : true)}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        <Typography sx={{ width: '33%', flexShrink: 0, alignSelf: 'center' }}>
          {resort.name}
        </Typography>
        <IconContext.Provider value={{ size: '2rem' }}>
          <WiSnowflakeCold />
        </IconContext.Provider>
        <Typography sx={{ flexShrink: 0, alignSelf: 'center' }}>
          This Week: {resort.snowTotal}"{/* convert to freedom */}
        </Typography>
      </AccordionSummary>
      {resort.weather.map((w: Weather, i: number) => (
        <MobileAccordionDetails
          weather={w}
          day={mobileDay[i]}
          key={w.datetime}
        />
      ))}
    </Accordion>
  );
};

export default MobileAccordion;
