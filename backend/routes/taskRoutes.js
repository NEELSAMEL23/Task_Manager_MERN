import express from 'express';
import { auth } from '../middleware/authMiddleware.js';
import {
    getTasks,
    createTask,
    updateTask,
    deleteTask,
    singleTask,
    getRecentTasks  // 👈 import this
} from '../controllers/taskController.js';

const router = express.Router();

router.use(auth);

router.get('/', getTasks);
router.get('/recent', getRecentTasks); // 👈 new route for recent tasks
router.get('/:id', singleTask);
router.post('/', createTask);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);

export default router;
