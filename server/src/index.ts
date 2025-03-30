import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import courseRoutes from './routes/courseRoutes';

// 載入環境變量
dotenv.config();

const app = express();

// 中間件
app.use(cors());
app.use(express.json());

// 連接數據庫
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/course-recommendation')
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// 路由
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Course Recommendation API' });
});

// 課程路由
app.use('/api/courses', courseRoutes);

// 啟動服務器
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 