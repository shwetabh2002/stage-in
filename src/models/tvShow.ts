import { Schema, model, Document } from 'mongoose';
import {Genre} from "./user";

interface TVShow extends Document {
  id: {type: string,unique: true};
  title: { type: String, required: true };
  description: string;
  genres: Genre[];
  episodes: Array<{
    episodeNumber: number;
    seasonNumber: number;
    releaseDate: Date;
    director: string;
    actors: string[];
  }>;
}

const tvShowSchema = new Schema<TVShow>({
  _id: { type: String},
  title: { type: String, required: true },
  description: String,
  genres: [String],
  episodes: [
    {
      episodeNumber: Number,
      seasonNumber: Number,
      releaseDate: Date,
      director: String,
      actors: [String],
    },
  ],
});

export default model<TVShow>('TVShow', tvShowSchema);
