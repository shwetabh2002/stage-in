import { Schema, model, Document } from 'mongoose';

export type Genre = 'Action' | 'Comedy' | 'Drama' | 'Fantasy' | 'Horror' | 'Romance' | 'SciFi';
export interface IUser extends Document {
  id: string;
  username: string;
  preferences: {
    favoriteGenres: Genre[];
    dislikedGenres: Genre[];
  };
  watchHistory: Array<{
    contentId: string;
    watchedOn: Date;
    rating?: number;
  }>;
}

const userSchema = new Schema<IUser>({
  _id: { type: String},
  username: { type: String, required: true },
  preferences: {
    favoriteGenres: [String],
    dislikedGenres: [String],
  },
  watchHistory: [
    {
      contentId: String,
      watchedOn: Date,
      rating: Number,
    },
  ]
});

export default model<IUser>('User', userSchema);
