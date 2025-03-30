import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Paper, Stack } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { AIService } from '../services/ai';
import { WebScraper } from '../services/scraper';

interface Message {
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const aiService = AIService.getInstance();
  const webScraper = new WebScraper();

  const handleSend = async () => {
    if (!input.trim()) return;

    const newMessage: Message = {
      text: input,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await aiService.chat(input);
      const aiMessage: Message = {
        text: response,
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('Chat error:', error);
      const errorMessage: Message = {
        text: '抱歉，發生錯誤。請稍後再試。',
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    }

    setIsLoading(false);
  };

  const handleAnalyzeWebsite = async () => {
    if (!url.trim()) return;

    setIsLoading(true);
    try {
      const scrapingResult = await webScraper.scrapeWebsite(url);
      const analysis = await aiService.analyzeText(scrapingResult.content);
      
      const resultMessage: Message = {
        text: `網頁分析結果：\n標題：${scrapingResult.title}\n\n分析：${analysis}`,
        isUser: false,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, resultMessage]);
    } catch (error) {
      console.error('Analysis error:', error);
      const errorMessage: Message = {
        text: '網頁分析失敗。請確保URL正確且可訪問。',
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    }
    
    setIsLoading(false);
    setUrl('');
  };

  return (
    <Box sx={{ maxWidth: 800, margin: 'auto', p: 2 }}>
      <Paper elevation={3} sx={{ p: 2, mb: 2 }}>
        <Typography variant="h6" gutterBottom>
          網頁分析
        </Typography>
        <Stack direction="row" spacing={1}>
          <TextField
            fullWidth
            label="輸入網址"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            disabled={isLoading}
          />
          <Button
            variant="contained"
            onClick={handleAnalyzeWebsite}
            disabled={isLoading || !url.trim()}
          >
            分析
          </Button>
        </Stack>
      </Paper>

      <Box sx={{ height: '60vh', overflow: 'auto', mb: 2 }}>
        {messages.map((message, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              justifyContent: message.isUser ? 'flex-end' : 'flex-start',
              mb: 1
            }}
          >
            <Paper
              sx={{
                p: 1,
                backgroundColor: message.isUser ? 'primary.light' : 'grey.100',
                maxWidth: '70%'
              }}
            >
              <Typography>{message.text}</Typography>
              <Typography variant="caption" sx={{ display: 'block', mt: 0.5 }}>
                {message.timestamp.toLocaleTimeString()}
              </Typography>
            </Paper>
          </Box>
        ))}
      </Box>

      <Stack direction="row" spacing={1}>
        <TextField
          fullWidth
          label="輸入訊息"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={isLoading}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
        />
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          onClick={handleSend}
          disabled={isLoading || !input.trim()}
        >
          發送
        </Button>
      </Stack>
    </Box>
  );
};

export default Chat; 