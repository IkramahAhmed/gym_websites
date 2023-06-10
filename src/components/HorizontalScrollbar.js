import React, { useContext } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { Box, Typography,Stack } from '@mui/material';

import ExerciseCard from './ExerciseCard';
import BodyPart from './BodyPart';




const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => (
<Stack direction="row" sx={{gap:{lg:'30px',xs:'50px'}}}
flexWrap="wrap" justifyContent="start">
    {data?.slice(0,6)?.map((item) => (
      <Box
        key={item.id || item}
        itemId={item.id || item}
        title={item.id || item}
        m="0 40px"
      >
        {bodyParts ? <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} /> : <ExerciseCard exercise={item} /> }
      </Box>
    ))}
  </Stack>
);

export default HorizontalScrollbar;