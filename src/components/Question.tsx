import React from 'react';
import { Paper, Typography, RadioGroup, FormControlLabel, Radio, Box } from '@mui/material';

interface QuestionProps {
  question: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

const Question: React.FC<QuestionProps> = ({ question, options, value, onChange }) => {
  return (
    <Paper
      elevation={3}
      sx={{
        p: 3,
        mb: 3,
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url(https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        '&:hover': {
          background: 'linear-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.85)), url(https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }
      }}
    >
      <Typography 
        variant="h6" 
        gutterBottom
        sx={{
          color: 'primary.main',
          fontWeight: 'bold',
          mb: 2,
          textShadow: '0 1px 2px rgba(0,0,0,0.1)'
        }}
      >
        {question}
      </Typography>
      <RadioGroup
        value={value}
        onChange={(e) => onChange(e.target.value)}
        sx={{ 
          mt: 2,
          '& .MuiFormControlLabel-root': {
            marginBottom: 1,
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            borderRadius: 1,
            padding: '4px 8px',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
            }
          }
        }}
      >
        {options.map((option, index) => (
          <FormControlLabel
            key={index}
            value={option}
            control={<Radio />}
            label={option}
          />
        ))}
      </RadioGroup>
    </Paper>
  );
};

export default Question; 