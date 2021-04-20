import React, { useState } from "react";
import {
    Button,
    Card,
    //CardActions,
    CardContent,
    Typography,
    Container,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { useAuth } from "./context/AuthContext";
import { useHistory, Link } from "react-router-dom";

function Dashboard() {
    const [error, setError] = useState("");
    const { signOut, currentUser } = useAuth();
    const history = useHistory();

    async function logOut() {


        try {
            await signOut();
            history.push("/login");
        } catch {
            setError("Logout Failed");
        }
    }

    return (
        <div>
            <Container maxWidth="xs" align="center">
                <Card>
                    <CardContent>
                        <Typography variant="h2">Profile</Typography>
                        <Typography variant="body2" gutterBottom>
                            Email: {currentUser.email}
                        </Typography>
                        {error && <Alert severity="error">{error}</Alert>}
                        <Button
                            
                            variant="contained"
                            color="primary"
                            component={Link}
                            to="/updateprofile"
                        >
                            Update Profile
                        </Button>
                        <Button
                            fullWidth
                            color="secondary"
                            onClick={logOut}
                        >
                            Sign Out
                        </Button>
                    </CardContent>
                </Card>
            </Container>
        </div>
    );
}

export default Dashboard;
