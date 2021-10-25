import { Accordion, AccordionSummary, Typography } from '@mui/material';
import { AcUnit, ExpandMore } from '@mui/icons-material';
import { useState } from 'react';
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
        expandIcon={<ExpandMore />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        <Typography sx={{ width: '50%', flexShrink: 0, alignSelf: 'center' }}>
          {resort.name}
        </Typography>
        <AcUnit sx={{ fontSize: 18, alignSelf: 'center' }} />
        <Typography sx={{ flexShrink: 0, alignSelf: 'center' }}>
          This Week: {resort.snowTotal}"
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
