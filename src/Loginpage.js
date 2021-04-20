import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {Link as RouterLink, useHistory} from 'react-router-dom';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Alert from "@material-ui/lab/Alert";
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {useAuth} from './context/AuthContext'


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://tutorsdojo.com/">
        TutorsDojo
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Loginpage() {
    const classes = useStyles();
    const { login } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    async function handleSubmit(e){
        e.preventDefault();

        try {
            setError('');
            setLoading(true);
            await login(e.target.email.value, e.target.password.value);
            history.push("/");
        } catch {
            setError("Failed to sign in");
            console.log("Failed to sign in");
            setLoading(false);
        }
        setLoading(false);
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    {error && <Grid item xs={12}><Alert severity="error">{error}</Alert></Grid>}
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        disabled={loading}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link component={RouterLink} to="/forget" variant="body1">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link component={RouterLink} to="/register" variant="body1">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
    );
}

export default Loginpage;
