import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Loginpage from "./Loginpage";
import SignUp from "./SignUp";
import {AuthProvider} from "./context/AuthContext";
import Dashboard from "./Dashboard"
import PrivateRoute from "./PrivateRoute"
import ForgetPassword from "./ForgetPassword";
import UpdateProfile from "./UpdateProfile";

function App() {
    const theme = createMuiTheme({
        palette: {
            primary: {
                main: "#007aff",
            },
            /*
        background:{
            default:"#ffffff",
        }*/
        },
    });

    return (
        
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                {<CssBaseline />}
                <div className="App">
                <AuthProvider>
                    <Switch>
                        <PrivateRoute exact path="/">
                            <Dashboard/>
                        </PrivateRoute>
                        <PrivateRoute path="/updateprofile">
                            <UpdateProfile/>
                        </PrivateRoute>
                        <Route path="/login">
                            <Loginpage />
                        </Route>
                        <Route path="/register">
                            <SignUp/>
                        </Route>
                        <Route path="/forget">
                            <ForgetPassword/>
                        </Route>
                        <Route path="*">
                            <Loginpage />
                        </Route>
                    </Switch>
                    </AuthProvider>
                   
                </div>
            </ThemeProvider>
        </BrowserRouter>
        
    );
}

export default App;
