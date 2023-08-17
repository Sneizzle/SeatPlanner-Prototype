import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import 'react-router-dom';
import { Link } from 'react-router-dom';
import { Fragment } from 'react';
import { IoMdCreate } from 'react-icons/io';
import { AiFillRead} from 'react-icons/ai';


const buttons = [

  <Fragment>

    <Link to="/createPage">
      <Button key="One">Create <IoMdCreate></IoMdCreate>  </Button>,
    </Link>

    <Link to="/readPage">
      <Button key="Two">Read <AiFillRead> </AiFillRead></Button>,
    </Link>

  


  </Fragment>
];

export default function GroupOrientation() {
  return (
    <Box
      sx={{
        display: 'flex',

        '& > *': {
          m: 1,
        },
      }}
    >

      <ButtonGroup
        orientation="vertical"
        aria-label="vertical contained button group"
        variant="contained"

      >
        {buttons}
      </ButtonGroup>

    </Box>
  );
}