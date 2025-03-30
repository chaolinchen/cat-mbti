import React from 'react';
import { Box, Typography, Button, Container, Paper, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SchoolIcon from '@mui/icons-material/School';
import ChatIcon from '@mui/icons-material/Chat';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Box sx={{ my: 4, textAlign: 'center' }}>
        <Typography variant="h3" component="h1" gutterBottom>
          歡迎使用 AI 課程推薦系統
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          讓 AI 幫助您找到最適合的課程
        </Typography>
      </Box>

      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={4}
        sx={{ mt: 4 }}
      >
        <Paper
          sx={{
            p: 4,
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <ChatIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
          <Typography variant="h5" gutterBottom>
            智能助手
          </Typography>
          <Typography color="text.secondary" paragraph align="center">
            與 AI 助手對話，獲得個性化的課程推薦
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate('/chat')}
          >
            開始對話
          </Button>
        </Paper>
        <Paper
          sx={{
            p: 4,
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <SchoolIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
          <Typography variant="h5" gutterBottom>
            課程列表
          </Typography>
          <Typography color="text.secondary" paragraph align="center">
            瀏覽所有可用的課程，找到適合您的選擇
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate('/courses')}
          >
            查看課程
          </Button>
        </Paper>
      </Stack>
    </Container>
  );
};

export default Home; 