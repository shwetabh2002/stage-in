import request from 'supertest';
import mongoose from 'mongoose';
import app from '../src/app';
import Wishlist from '../src/models/wishlist';
import User from '../src/models/user';
import Movie from '../src/models/movie';

describe('Wishlist API', () => {
  beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017');
  });

  afterAll(async () => {
    await mongoose.connection.close();
      process.exit(0); 
  });

  it('should add an item to the wishlist using curl equivalent', async () => {
    const movies = await Movie.find();
    expect(movies).toBeDefined();
    expect(movies.length).toBeGreaterThan(0);

    const randomMovie = movies[Math.floor(Math.random() * movies.length)];

    const response = await request(app)
        .post('/mylist/add')
        .query({ userId: 'user1' })
        .send({
          _id: randomMovie._id,
          contentType: 'Movie',
          contentTitle: randomMovie.title,
        });

    expect(response.status).toBe(200);

    const wishlist = await Wishlist.findOne({ userId: 'user1' });
    let count = wishlist!.items.length;
    expect(wishlist).not.toBeNull();
    expect(wishlist!.items).toHaveLength(count);
  });

  it('should remove an item from the wishlist using curl equivalent', async () => {


    const wishlist = await Wishlist.findOne({ userId: 'user1' });
    const itemIdToRemove = wishlist!.items[0]._id;

    const response = await request(app)
        .post('/mylist/remove')
        .send({
          userId: 'user1',
          itemId: itemIdToRemove,
        });

    expect(response.status).toBe(200);

    const updatedWishlist = await Wishlist.findOne({ userId: 'user1' });
    let count = updatedWishlist!.items.length;
    expect(updatedWishlist).not.toBeNull();
    expect(updatedWishlist!.items).toHaveLength(count);
  });

  it('should list items from the wishlist using curl equivalent', async () => {


    const response = await request(app).get('/mylist/list').query({ userId: 'user5' })

    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(2);
  });

  it('should handle case where user has not added anything to the wishlist using curl equivalent', async () => {

    const response = await request(app).get('/mylist/list').query({ userId: 'user10' });

    expect(response.status).toBe(200);
    expect(response.text).toBe('You have not added anything in your wishlist');
  });
});
