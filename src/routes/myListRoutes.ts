import { Router } from 'express';
import myListController from '../controllers/myListController';

const router = Router();

router.post('/add', myListController.addToMyListController);
router.post('/remove', myListController.removeFromMyListController);
router.get('/list', myListController.listMyItemsController);

export default router;
