import React from 'react';
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Box,
  Chip,
} from '@mui/material';
import { Theme } from '@mui/material/styles';
import { SxProps } from '@mui/system';

// 模擬課程數據
const courses = [
  {
    id: 1,
    title: '人工智能基礎',
    description: '學習 AI 的核心概念和基礎理論，適合初學者。',
    image: 'https://source.unsplash.com/random/800x600?ai',
    level: '入門',
    duration: '12週',
    tags: ['AI', '機器學習', '數據科學'],
  },
  {
    id: 2,
    title: 'Python 程式設計',
    description: '從零開始學習 Python 程式設計，包含實際項目練習。',
    image: 'https://source.unsplash.com/random/800x600?python',
    level: '入門',
    duration: '8週',
    tags: ['Python', '程式設計', '實戰項目'],
  },
  {
    id: 3,
    title: '深度學習進階',
    description: '深入學習神經網絡架構和高級算法，適合有基礎的學習者。',
    image: 'https://source.unsplash.com/random/800x600?deeplearning',
    level: '進階',
    duration: '16週',
    tags: ['深度學習', '神經網絡', 'PyTorch'],
  },
];

const Courses: React.FC = () => {
  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          課程列表
        </Typography>
        <Typography color="text.secondary" paragraph>
          探索我們精心挑選的課程，開始您的學習之旅
        </Typography>
      </Box>

      <Box sx={{ 
        display: 'grid',
        gap: 4,
        gridTemplateColumns: {
          xs: '1fr',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)'
        }
      }}>
        {courses.map((course) => (
          <Card key={course.id} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardMedia
              component="img"
              height="200"
              image={course.image}
              alt={course.title}
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" component="h2">
                {course.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                {course.description}
              </Typography>
              <Box sx={{ mb: 2 }}>
                <Chip
                  label={`難度：${course.level}`}
                  size="small"
                  sx={{ mr: 1, mb: 1 }}
                />
                <Chip
                  label={`時長：${course.duration}`}
                  size="small"
                  sx={{ mr: 1, mb: 1 }}
                />
              </Box>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 2 }}>
                {course.tags.map((tag) => (
                  <Chip key={tag} label={tag} size="small" variant="outlined" />
                ))}
              </Box>
              <Button variant="contained" fullWidth>
                查看詳情
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
  );
};

export default Courses; 