import { useState } from 'react'
import { Card, CardActions, CardContent, Container, MenuItem, Slider, Switch, Select, Typography } from "@material-ui/core"
// import { VolumeUp, VolumeDown } from "@material-ui/icons"

import { makeStyles } from 'react'
// import classes from '*.module.css'

// const useStyle = makeStyles({
//   root: {
//       marginTop: '60px',
//       display: 'flex',
//       flexDirection: 'column',
//       maxWidth: '1024px'
//   },
//   container: {
//       display: 'flex',
//       justifyContent: 'space-between',
//       flexWrap: 'wrap'
//   },
//   card: {
//       maxWidth: '275px',
//       marginTop: '20px'
//   },
//   system: {
//       marginTop: "20px"
//   }
// })

export default function Dashboard(){
  /* Values for state */
  const [isConnected, setIsConnected] = useState(true)
  const [volumeLvl, setVolumeLvl] = useState(50)
  const [soundQual, setSoundQual] = useState('2')

  const handleChange = (event) => {
    event.target.checked ? isConnected(true) : setIsConnected(false)
  }

  const changeVol = (event, newVol) => {
    setVolumeLvl(newVol)
  }

  const changeQual = (event) => {
    setSoundQual(event.target.value)
  }

  // const classes = useStyle();

  return(
    <Container >

     { /* Header */}
      <Typography variant="h4">
        Welcome to the Music App, it doesn't look nice but it works
      </Typography>

      {/* Online Card */}
      <Container >
        <Card >
          <CardContent>
            <Typography variant="h2">
              Online Mode
            </Typography>
            <Typography variant="h5">
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
        <Typography variant="h2">
          Master Volume
        </Typography>
        <Typography variant="h5">
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
        <Typography variant="h2">
          Sound Quality
        </Typography>
        <Typography>
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
    {/* NOTIFICATION CARD */}
    <Typography>
      SYSTEM NOTIFICATIONS:
    </Typography>


    </Container>
  )
}