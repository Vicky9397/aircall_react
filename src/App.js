import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { customTheme } from './components/styled/theme';
import MainContent from './components/common/MainContent';

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <MainContent />
    </ThemeProvider>
  );
}

export default App;
