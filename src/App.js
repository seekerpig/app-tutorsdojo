import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Loginpage from "./Loginpage";
import SignUp from "./SignUp";

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
                    <Switch>

                        <Route path="/login">
                            <Loginpage />
                        </Route>
                        <Route path="/register">
                            <SignUp/>
                        </Route>
                        <Route path="*">
                            <Loginpage />
                        </Route>
                    </Switch>
                </div>
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;
