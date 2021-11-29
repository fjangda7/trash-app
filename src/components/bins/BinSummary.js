import React from 'react'
import moment from 'moment'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const BinSummary = ({bin}) => {
  const backgroundColour = (bin.needsToBePickedUp === 'true') ? '#ffdede' : '#e3ffe4';
  const card = (
    <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Trash Can Details
        </Typography>
        <Typography variant="h5" component="div">
          Bin {bin.number}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {moment(bin.setUpAt.toDate().toString()).calendar()} 
        </Typography>
      </CardContent>
    </React.Fragment>
  );
  
    return (
      <Card variant="outlined" style={{backgroundColor: backgroundColour}}>
        {card}
      </Card>
    )
}

export default BinSummary