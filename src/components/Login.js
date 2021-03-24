//Import components from material ui
import {
  TextField,
  Button,
  Container
} from '@material-ui/core';
//Import makeStyles function to add style
import {makeStyles} from "@material-ui/core/styles";

//Style variable
const useStyle = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 3,
    marginTop: '10px',
    width: "360px"
  },
  button: {
    marginTop: '60px'
  }
});

export default function Login(props) {
  const classes = useStyle()

  return(
    //Show Login Page
    <Container className={classes.root}>
      <TextField label="Username"/>
      <TextField label="Password"/>
      <Button onClick={props.loginFunc} className={classes.button} variant="contained" color="primary"></Button>
    </Container>
  )
}