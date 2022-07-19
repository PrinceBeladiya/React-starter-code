import { ThemeProvider } from '@mui/material/styles';
import theme from './assets/mui/theme';
import RootRoutes from './routes';
import './assets/styles/app.scss';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <RootRoutes />
      </div>
    </ThemeProvider>
  );
}

export default App;
