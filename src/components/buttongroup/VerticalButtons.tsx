import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import 'react-router-dom';
import { Link } from 'react-router-dom';
import { Fragment } from 'react';

const buttons  = [

    <Fragment>
            
      <Link to="/createPage">
        <Button key="One">Create</Button>,
      </Link>

      <Link to="/readPage">
        <Button key="Two">Read</Button>,
      </Link>

      <Link to= "/updatePage">
        <Button key="Three">Update</Button>,
        </Link>

        <Link to="/deletePage">
        <Button key="Four">Delete</Button>,
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