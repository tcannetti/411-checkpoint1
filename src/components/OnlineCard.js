import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Switch from '@material-ui/core/switch'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    minHeight: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard() {
  const [isConnected, setIsConnected] = useState(false);
  const classes = useStyles();

  const handleChange = (evt) => {
    setIsConnected(isConnected)
  }

  return (
    <Card className={classes.root}>
      <CardContent>
        <h2>Online Mode</h2>
        <p>Is this app connected to the internet?</p>
        <Switch onChange={()=> handleChange()} checked={isConnected}/>
      </CardContent>

      {!isConnected && (
        <p>
          Your application is offline. You won't be able to share or stream music to other devices.
        </p>
      )}
    </Card>
  );
}
