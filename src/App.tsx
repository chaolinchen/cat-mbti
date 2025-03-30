import React, { useState } from 'react';
import { ThemeProvider, createTheme, CssBaseline, Box, Container } from '@mui/material';
import Welcome from './components/Welcome';
import Quiz from './components/Quiz';
import Result from './components/Result';
import { PersonalityType } from './data/mbtiTypes';

interface Scores {
  I: number;
  E: number;
  S: number;
  N: number;
  T: number;
  F: number;
  J: number;
  P: number;
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#4ECDC4',
    },
    secondary: {
      main: '#FF6B6B',
    },
  },
  typography: {
    fontFamily: '"Noto Sans TC", "Roboto", "Helvetica", "Arial", sans-serif',
  },
});

const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<'welcome' | 'quiz' | 'result'>('welcome');
  const [catName, setCatName] = useState('');
  const [scores, setScores] = useState<Scores>({
    I: 0,
    E: 0,
    S: 0,
    N: 0,
    T: 0,
    F: 0,
    J: 0,
    P: 0
  });
  const [result, setResult] = useState<PersonalityType>('ESTJ');

  const handleStart = (name: string) => {
    setCatName(name);
    setCurrentStep('quiz');
  };

  const calculateMBTIType = (scores: Scores): PersonalityType => {
    const type = [
      scores.I > scores.E ? 'I' : 'E',
      scores.S > scores.N ? 'S' : 'N',
      scores.T > scores.F ? 'T' : 'F',
      scores.J > scores.P ? 'J' : 'P'
    ].join('') as PersonalityType;
    return type;
  };

  const handleQuizComplete = (scores: Scores) => {
    const type = calculateMBTIType(scores);
    setResult(type);
    setCurrentStep('result');
  };

  const handleRestart = () => {
    setCurrentStep('welcome');
    setCatName('');
    setScores({
      I: 0,
      E: 0,
      S: 0,
      N: 0,
      T: 0,
      F: 0,
      J: 0,
      P: 0
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="md">
        <Box sx={{ mt: 4 }}>
          {currentStep === 'welcome' ? (
            <Welcome onStart={handleStart} />
          ) : currentStep === 'quiz' ? (
            <Quiz onComplete={handleQuizComplete} />
          ) : (
            <Result
              type={result}
              catName={catName}
              onRestart={handleRestart}
            />
          )}
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default App; 