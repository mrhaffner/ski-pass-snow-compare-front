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

interface Props {
  resortName: string;
  amountSnow: number;
}

const MobileAccordion = ({ resortName, amountSnow }: Props) => {
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
          {resortName}
        </Typography>
        <IconContext.Provider value={{ size: '2rem' }}>
          <WiSnowflakeCold />
        </IconContext.Provider>
        <Typography sx={{ flexShrink: 0, alignSelf: 'center' }}>
          This Week: {amountSnow}"
        </Typography>
      </AccordionSummary>
      <MobileAccordionDetails
        weekDay="Today"
        dailySnow={7}
        highTemp={30}
        lowTemp={17}
        wind={10}
      />
    </Accordion>
  );
};

export default MobileAccordion;
