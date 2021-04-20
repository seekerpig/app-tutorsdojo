import React, {useState} from 'react'
import {Link as RouterLink} from "react-router-dom"
import {Container, Typography, CssBaseline, Button, TextField, Avatar, Grid, Link} from "@material-ui/core"
import {Alert} from "@material-ui/lab"
import LockOutlinedIcon from "@material-ui/icons/LockOutlined"
import { makeStyles } from '@material-ui/core/styles';
import {useAuth} from "./context/AuthContext"


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

function ForgetPassword() {
    const classes = useStyles();
    const {resetPassword} = useAuth();
    const [error, setError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    async function handleSubmit(e){
        e.preventDefault();
        
        try{
            setError("");
            setSuccessMessage("");
            await resetPassword(e.target.email.value)
            setSuccessMessage("Check your inbox for further instructions")
        }
        catch{
            setError("Failed to reset email, most likely email address does not exist")
        }
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Forget your password?
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
                    {error && <Alert severity="error">{error}</Alert>}
                    {successMessage && <Alert severity="success">{successMessage}</Alert>}
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Reset Password
                    </Button>
                    <Grid container justify="center">
                        <Grid item>
                            <Link component={RouterLink} to="/login" variant="body1">
                                {"Back to Login"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}

export default ForgetPassword

