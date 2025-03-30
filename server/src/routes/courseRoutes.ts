import express, { Router } from 'express';
import {
  getAllCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse,
  searchCourses
} from '../controllers/courseController';

const router: Router = express.Router();

// 獲取所有課程
router.get('/', getAllCourses);

// 搜索課程
router.get('/search', searchCourses);

// 獲取單個課程
router.get('/:id', getCourseById);

// 創建新課程
router.post('/', createCourse);

// 更新課程
router.put('/:id', updateCourse);

// 刪除課程
router.delete('/:id', deleteCourse);

export default router; 