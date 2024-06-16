import { Request, Response } from 'express';
import  myListService from '../services/myListService';

const addToMyListController = async (req: Request, res: Response) => {
  try {
    const userId = String(req.query.userId);
    const   listItem  = req.body;
    await myListService.addToMyList(userId, listItem);
    res.status(200).send('Item added to list');
  } catch (error) {
    res.status(500).send("error occurred");
  }
};

const removeFromMyListController = async (req: Request, res: Response) => {
  try {
    const { userId, itemId } = req.body;
    const updatedUserwishlist = await myListService.removeFromMyList(userId, itemId);
    res.status(200).send(updatedUserwishlist);
  } catch (error) {
    res.status(500).send("error occurred");
  }
};

const listMyItemsController = async (req: Request, res: Response) => {
  try {
    const  userId = String(req.query.userId) ;
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 3;
    const items = await myListService.listMyItems(userId, page, limit);
    res.status(200).send(items);
  } catch (error) {
    res.status(500).send("error occurred");
  }
};


export default {
    addToMyListController,
    removeFromMyListController,
    listMyItemsController,
}