import {Container, createTheme, ThemeProvider} from "@mui/material";
import Profile from "./Profile/Profile";
import {pink, blue} from "@mui/material/colors";


const theme = createTheme(
  {
    palette: {
      primary: pink,
      secondary: blue,
    },
  }
);

function App() {
  return <ThemeProvider theme={theme}>
    <Container maxWidth={"md"}>
      <Profile/>
    </Container>
  </ThemeProvider>
}

export default App;
