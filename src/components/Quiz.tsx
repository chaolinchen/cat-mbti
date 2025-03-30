import React, { useState } from 'react';
import {
  Box,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Button,
  Paper,
  LinearProgress,
  Container,
  Card,
  CardContent
} from '@mui/material';
import { motion } from 'framer-motion';
import { questions } from '../data/questions';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { QuizScores } from '../types/quiz';
import '../styles/Quiz.css';

interface QuizProps {
  onComplete: (scores: QuizScores) => void;
}

export const Quiz: React.FC<QuizProps> = ({ onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [scores, setScores] = useState<QuizScores>({
    I: 0, E: 0,
    S: 0, N: 0,
    T: 0, F: 0,
    J: 0, P: 0
  });

  const handleAnswer = (value: string) => {
    const newAnswers = { ...answers, [currentQuestion]: value };
    setAnswers(newAnswers);

    // 更新分數
    const question = questions[currentQuestion];
    const selectedOption = question.options.find(opt => opt.value === value);
    if (selectedOption) {
      const newScores = { ...scores };
      Object.entries(selectedOption.score).forEach(([key, value]) => {
        if (value) {
          newScores[key as keyof QuizScores] += value;
        }
      });
      setScores(newScores);
    }
  };

  const handleNext = () => {
    // 如果是最後一題，完成測驗
    if (currentQuestion === questions.length - 1) {
      onComplete(scores);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const currentAnswer = answers[currentQuestion];

  return (
    <div className="quiz-container">
      <div className="progress-bar">
        <div 
          className="progress" 
          style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
        />
      </div>
      <div className="question-container">
        <h2>問題 {currentQuestion + 1} / {questions.length}</h2>
        <p className="question">{questions[currentQuestion].question}</p>
        <div className="options">
          {questions[currentQuestion].options.map((option) => (
            <button
              key={option.value}
              className={`option ${currentAnswer === option.value ? 'selected' : ''}`}
              onClick={() => handleAnswer(option.value)}
            >
              {option.label}
            </button>
          ))}
        </div>
        <button 
          className="next-button"
          onClick={handleNext}
          disabled={!currentAnswer}
        >
          {currentQuestion === questions.length - 1 ? '完成' : '下一題'}
        </button>
      </div>
    </div>
  );
};

export default Quiz; 