import User from '../models/user';
import Movie from '../models/movie';
import Wishlist, {wishlist, WishlistItem} from "../models/wishlist";
import TvShow from "../models/tvShow";

 const addToMyList = async (userId: string, listItem: WishlistItem):
  Promise<void> => {
     const user = await User.findById(userId);
     if (!user) {
         throw new Error('User not found');
     }
     await Wishlist.updateOne(
         {
             userId: userId,
             'items._id': { $ne: listItem._id }
         },
         {
             $addToSet: { items: listItem }
         },
         { upsert: true }
     );
};

 const removeFromMyList = async (userId: string, itemId: string):
  Promise<wishlist|null> => {
    const user = await User.findById(userId);
    if (!user) throw new Error('User not found');
     const updatedWishlist = await Wishlist.findOneAndUpdate(
         { userId },
         { $pull: { items: { _id: itemId } } },
         { new: true }
     );
     return updatedWishlist;
};

 const listMyItems = async (userId: string, page: number, limit: number):
  Promise<WishlistItem[] | string> => {
     const skip = (page - 1) * limit;

     const wishlist = await Wishlist.findOne({ userId: userId })
         .select({ items: { $slice: [skip, limit] } });

     if (!wishlist || wishlist.items.length === 0) {
         return "You have not added anything in your wishlist";
     }

     return wishlist.items;
 };

export default {
    addToMyList,
    removeFromMyList,
    listMyItems,
}