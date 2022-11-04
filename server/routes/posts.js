import express from 'express';

const router = express.Router();

router.get('/', (req, resp) => {
    resp.send('this works');
});

export default router;