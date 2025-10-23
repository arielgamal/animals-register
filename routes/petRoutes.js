import express from 'express'
import { createPet } from '../controllers/petController.js';
const router = express.Router();

router.post('/pet', createPet);

// router.post('/pet', (req, res) => {
//     res.send('LOVE PET');
// });


export default router