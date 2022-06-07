import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles'
import theme from './theme.js'
import "./global.style.css"
import Navigate from './Navigate';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navigate />
    </ThemeProvider>
  );
}

export default App;
