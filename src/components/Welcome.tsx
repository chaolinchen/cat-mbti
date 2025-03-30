import React, { useState } from 'react';
import { 
  Box, 
  Card, 
  CardContent, 
  Typography, 
  Button,
  Container,
  TextField
} from '@mui/material';
import { motion } from 'framer-motion';

interface WelcomeProps {
  onStart: (name: string) => void;
}

const Welcome: React.FC<WelcomeProps> = ({ onStart }) => {
  const [catName, setCatName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (catName.trim()) {
      onStart(catName.trim());
    }
  };

  return (
    <Container maxWidth="md">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Box
          sx={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            p: 3,
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: 'url(https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: 0.1,
              zIndex: -1,
            }
          }}
        >
          <Card 
            sx={{ 
              backdropFilter: 'blur(10px)',
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              borderRadius: 3,
              boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
              mb: 4,
              width: '100%',
              maxWidth: 800
            }}
          >
            <CardContent sx={{ p: 4 }}>
              <Typography 
                variant="h4" 
                component="h1" 
                gutterBottom
                sx={{ 
                  textAlign: 'center',
                  fontWeight: 'bold',
                  color: '#4ECDC4',
                  mb: 4
                }}
              >
                歡迎來到貓咪 MBTI 測驗
              </Typography>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <Box>
                  <Typography variant="h6" gutterBottom>
                    關於測驗
                  </Typography>
                  <Typography variant="body1" paragraph>
                    這個測驗將幫助你了解你的貓咪性格類型。通過回答一系列問題，我們將分析你的貓咪在以下四個維度上的特徵：
                  </Typography>
                  <Typography variant="body2" paragraph>
                    • 內向 (I) vs 外向 (E)
                  </Typography>
                  <Typography variant="body2" paragraph>
                    • 感覺 (S) vs 直覺 (N)
                  </Typography>
                  <Typography variant="body2" paragraph>
                    • 思考 (T) vs 感受 (F)
                  </Typography>
                  <Typography variant="body2" paragraph>
                    • 判斷 (J) vs 知覺 (P)
                  </Typography>
                </Box>

                <Box>
                  <Typography variant="h6" gutterBottom>
                    測驗說明
                  </Typography>
                  <Typography variant="body1" paragraph>
                    測驗共有 20 個問題，每個問題都有 4 個選項。請根據你的直覺選擇最符合你貓咪性格的選項。測驗大約需要 5-10 分鐘完成。
                  </Typography>
                </Box>

                <Box>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <TextField
                      label="貓咪的名字"
                      value={catName}
                      onChange={(e) => setCatName(e.target.value)}
                      required
                      fullWidth
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '&:hover fieldset': {
                            borderColor: 'primary.main',
                          },
                        },
                      }}
                    />
                    <Button
                      variant="contained"
                      onClick={handleSubmit}
                      disabled={!catName}
                      sx={{
                        mt: 2,
                        py: 1.5,
                        fontSize: '1.1rem',
                        background: 'linear-gradient(45deg, #FF6B6B 30%, #4ECDC4 90%)',
                        '&:hover': {
                          background: 'linear-gradient(45deg, #FF6B6B 50%, #4ECDC4 100%)'
                        }
                      }}
                    >
                      開始測試
                    </Button>
                  </Box>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </motion.div>
    </Container>
  );
};

export default Welcome; 