import React from 'react';
import { Box, Typography, Paper, Grid, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { getTypeDescription, PersonalityType } from '../data/mbtiTypes';
import '../styles/Result.css';

interface ResultProps {
  type: PersonalityType;
  catName: string;
  onRestart: () => void;
}

const Result: React.FC<ResultProps> = ({ type, catName, onRestart }) => {
  const personality = getTypeDescription(type);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="result-container"
    >
      <Box className="result-content">
        <Typography variant="h4" className="result-title">
          {catName} 的貓咪性格分析
        </Typography>
        
        <Typography variant="h5" className="result-subtitle">
          {catName} 的 MBTI 類型是 {type} ({personality.description.split('，')[0].replace('你是一隻', '').replace('的貓咪', '').split('。')[0].replace('又', '').replace('且', '').replace('並', '').replace('，', '')})的貓
        </Typography>

        <Typography variant="body1" className="result-description">
          {personality.description}
        </Typography>

        <Grid container spacing={3} className="result-grid">
          <Grid item xs={12} md={6}>
            <Paper className="trait-card">
              <Typography variant="h6" className="card-title">
                性格特質
              </Typography>
              <ul className="trait-list">
                {personality.traits.map((trait, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="trait-item"
                  >
                    {trait}
                  </motion.li>
                ))}
              </ul>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper className="suggestion-card">
              <Typography variant="h6" className="card-title">
                相處建議
              </Typography>
              <ul className="suggestion-list">
                {personality.tips.map((tip, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="suggestion-item"
                  >
                    {tip}
                  </motion.li>
                ))}
              </ul>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper className="dialogue-card">
              <Typography variant="h6" className="card-title">
                貓咪想說的話
              </Typography>
              <ul className="dialogue-list">
                {personality.dialogue.map((dialogue, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="dialogue-item"
                  >
                    {dialogue}
                  </motion.li>
                ))}
              </ul>
            </Paper>
          </Grid>
        </Grid>

        <Button
          variant="contained"
          color="primary"
          onClick={onRestart}
          className="restart-button"
        >
          重新測驗
        </Button>
      </Box>
    </motion.div>
  );
};

export default Result; 