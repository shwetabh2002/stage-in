import mongoose from 'mongoose';
import User from '../src/models/user';
import Wishlist from '../src/models/wishlist';
import * as dotenv from 'dotenv';
dotenv.config();


mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017')
    .then(async () => {
        console.log('Connected to MongoDB');

        try {
            const users = await User.find();

            const sampleWishlists = users.map(user => ({

                userId: user.id.toString(),
                items: [
                    {
                        _id: 'mo11',
                        contentType: 'Movie',
                        contentTitle: 'heaven on earth',
                        addedOn: new Date()
                    },
                    {
                        _id: 'tv11',
                        contentType: 'TVShow',
                        contentTitle: 'two and half man',
                        addedOn: new Date()
                    }
                ]
            }));

            // Insert sample wishlists into Wishlist collection
            await Wishlist.insertMany(sampleWishlists);

            console.log('Sample wishlists inserted successfully');
        } catch (error) {
            console.error('Error inserting sample wishlists:', error);
        }
    })
    .catch(error => {
        console.error('Error connecting to MongoDB:', error);
    });
