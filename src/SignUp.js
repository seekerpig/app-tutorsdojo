import React, {useState} from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Alert from "@material-ui/lab/Alert"
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import {Link as RouterLink, useHistory} from 'react-router-dom';
import {useAuth} from './context/AuthContext'


function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://tutorsdojo.com">
                TutorsDojo
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function SignUp() {
    const classes = useStyles();
    //const { signUp, currentUser, signOut } = useAuth();
    //currently only signUp is used, currentUser and signOut is hidden
    const { signUp } = useAuth();
    const [error, setError] = useState('');
    const [SignUpSuccessful, setSignUpSuccessful] = useState(false);
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    async function handleSubmit(e){
        e.preventDefault();

        if (e.target.password.value !== e.target.password2.value){
            return setError("Password do not match");
        }

        try {
            setError('');
            setLoading(true);
            await signUp(e.target.email.value, e.target.password.value);
            setSignUpSuccessful(true);
            setTimeout(() => history.push("/login"), 2000);
        } catch {
            setError("Failed to create an account");
        }
        setLoading('false');
    }
    //temporarily removed due to deploy version for people to see
    /* function logOut(){
        setLoading(false);
        signOut();
    } */

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                        {/*currentUser && currentUser.email*/}
                        
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="fname"
                                name="firstName"
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                autoComplete="lname"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password2"
                                label="Confirm Password"
                                type="password"
                                id="password2"
                                autoComplete="current-password"
                            />
                        </Grid>
                        {error && <Grid item xs={12}><Alert severity="error">{error}</Alert></Grid>}
                        {SignUpSuccessful && <Grid item xs={12}><Alert severity="success">Sign up is successful!</Alert></Grid>}
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        value="allowExtraEmails"
                                        color="primary"
                                    />
                                }
                                label="I want to receive inspiration, marketing promotions and updates via email."
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        disabled={loading}
                    >
                        Sign Up
                    </Button>
                    {/*<Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={logOut}        
                    >
                        Sign Out
                    </Button>*/}
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link component={RouterLink} to="/login" variant="body2">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={5}>
                <Copyright />
            </Box>
        </Container>
    );
}
