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
        {/* <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
          }}
        > */}
        {/* <Box
          sx={{
            display: 'flex',
          }}
        > */}
        <Typography sx={{ width: '33%', flexShrink: 0, alignSelf: 'center' }}>
          {resortName}
        </Typography>
        <IconContext.Provider value={{ size: '2rem' }}>
          <WiSnowflakeCold />
        </IconContext.Provider>
        <Typography sx={{ flexShrink: 0, alignSelf: 'center' }}>
          This Week: {amountSnow}"
        </Typography>
        {/* </Box> */}
        {/* <Typography sx={{}}>Detail Forecast</Typography> */}
        {/* </Box> */}
      </AccordionSummary>
      <AccordionDetails>
        <Typography>It's about to snow scro'</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default MobileAccordion;
