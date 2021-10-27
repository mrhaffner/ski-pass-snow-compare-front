import { Accordion, AccordionSummary, Typography } from '@mui/material';
import { AcUnit, ExpandMore } from '@mui/icons-material';
import { useState } from 'react';
import MobileAccordionDetails from './MobileAccordionDetails';
import { Resort, Weather } from '../../types';
import { trimResortName } from '../../utilities/string';
import { Box } from '@mui/system';
import { getDayName } from '../../utilities/unitConvert';

interface Props {
  resort: Resort;
}

const MobileAccordion = ({ resort }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const resortName = trimResortName(resort.name);

  return (
    <Accordion
      expanded={expanded}
      onChange={() => setExpanded(expanded ? false : true)}
      sx={{ background: 'rgba( 255, 255, 255, 0 )' }}
    >
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
        sx={{ background: 'white' }}
      >
        <Typography sx={{ width: '50%', flexShrink: 0, alignSelf: 'center' }}>
          {resortName}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '125px',
          }}
        >
          <Box sx={{ display: 'flex' }}>
            <AcUnit
              sx={{ fontSize: 18, alignSelf: 'center', marginRight: '2px' }}
            />
            <Typography variant="body2" sx={{ alignSelf: 'center' }}>
              This Week:
            </Typography>
          </Box>
          <Box>
            <Typography sx={{ flexShrink: 0 }}>{resort.snowTotal}"</Typography>
          </Box>
        </Box>
      </AccordionSummary>
      {resort.weather.map((w: Weather, i: number) => (
        <MobileAccordionDetails
          weather={w}
          day={getDayName(i)}
          key={w.datetime}
        />
      ))}
    </Accordion>
  );
};

export default MobileAccordion;
