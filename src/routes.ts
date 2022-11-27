import { Router } from 'express';

const router = Router();

router.get('/ping', (req, res) => res.send('API Running 🚀'));

export default router;