import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <h2>Sound Quality</h2>
        <p>Manually control the music quality in event of poor connection</p>
        <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Quality</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              onChange={handleChange}
            >
              <MenuItem value={10}>Low</MenuItem>
              <MenuItem value={20}>Normal</MenuItem>
              <MenuItem value={30}>HQ</MenuItem>
            </Select>
          </FormControl>
        </CardContent>
      </Card> 
    )
  }