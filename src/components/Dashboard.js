import { useState } from 'react'
import { Card, CardActions, CardContent, Container, MenuItem, Slider, Switch, Select, Typography } from "@material-ui/core"
// import { VolumeUp, VolumeDown } from "@material-ui/icons"

import { makeStyles } from '@material-ui/core/styles'

// const useStyle = makeStyles({
//   root: {
//       marginTop: '60px',
//       display: 'flex',
//       flexDirection: 'column',
//       maxWidth: '1024px'
//   },
const useStyle = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 3,
    marginTop: '40px',
    maxwidth: "1024px"
  }
});

export default function Dashboard(){
  const classes = useStyle();
  /* Values for state */
  const [isConnected, setIsConnected] = useState(false)
  const [volumeLvl, setVolumeLvl] = useState(50)
  const [soundQual, setSoundQual] = useState('2')

  const handleChange = (event) => {
    setIsConnected(event.target.checked)
  }

  const changeVol = (event, newVol) => {
    setVolumeLvl(newVol)
  }

  const changeQual = (event) => {
    setSoundQual(event.target.value)
  }

  // const classes = useStyle();

  return(
    <Container>

     { /* Header */}
      <Typography variant="h3">
        Welcome to the Music App
      </Typography>

      {/* div to wrap it all for style */}
      <div className={classes.root}>
      {/* Online Card */}
      <Container >
        <Card >
          <CardContent>
            <Typography variant="h6">
              Online Mode
            </Typography>
            <Typography variant="body1">
              Is the app connected to the internet?
            </Typography>
          </CardContent>
          <CardActions>
            {/* Switch to change the status */}
            <Switch checked={isConnected} onChange={handleChange}/>
          </CardActions>
        </Card>
      </Container>

    {/* VOLUME CARD */}
      <Card >
        <Typography variant="h6">
          Master Volume
        </Typography>
        <Typography variant="body1">
          Overrides all other sound settings in this application. 
        </Typography>
        <CardActions>
          <Slider 
            value={volumeLvl}
            onChange={changeVol}
            min={0}
            max={100}
            step={10}
            marks={true}
          />
        </CardActions>
      </Card>
    
    {/* Sound Quality card */}
    <Card >
      <CardContent>
        <Typography variant="h6">
          Sound Quality
        </Typography>
        <Typography variant="body1">
          Manually Control the Sound in the event of poor connection. 
        </Typography>
      </CardContent>
      <CardActions>
        <Select value={soundQual} onChange={changeQual}>
          <MenuItem value={1}>Low</MenuItem>
          <MenuItem value={2}>Standard</MenuItem>
          <MenuItem value={3}>High-Def</MenuItem>
        </Select>
      </CardActions>
    </Card>
    </div>
    {/* NOTIFICATION CARD */}
    <Typography>
      SYSTEM NOTIFICATIONS:
    </Typography>


    </Container>
  )
}