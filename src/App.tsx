import { ThemeProvider, createTheme, CssBaseline, Container, Typography, Box, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { useState } from 'react';
import DeclensionPractice from './components/DeclensionPractice';
import VerbPractice from './components/VerbPractice';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    background: {
      default: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

function App() {
  const [practiceType, setPracticeType] = useState<'noun' | 'verb'>('noun');

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="md" sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Box sx={{ 
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          py: 4
        }}>
          <Typography variant="h3" component="h1" gutterBottom>
            Latin Practice
          </Typography>
          <ToggleButtonGroup
            color="primary"
            value={practiceType}
            exclusive
            onChange={(_, value) => value && setPracticeType(value)}
            sx={{ mb: 3 }}
          >
            <ToggleButton value="noun">Noun Declensions</ToggleButton>
            <ToggleButton value="verb">Verb Endings</ToggleButton>
          </ToggleButtonGroup>
          {practiceType === 'noun' ? (
            <>
              <Typography variant="h5" color="text.secondary" gutterBottom>
                Select a declension to practice
              </Typography>
              <DeclensionPractice />
            </>
          ) : (
            <VerbPractice />
          )}
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
