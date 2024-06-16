import { Schema, model, Document } from 'mongoose';
import {Genre} from "./user";

interface Movie extends Document {
  id: string;
  title: string;
  description: string;
  genres: Genre[];
  releaseDate: Date;
  director: string;
  actors: string[];
}

const movieSchema = new Schema<Movie>({
  _id: { type: String},
  title: { type: String, required: true },
  description: String,
  genres: [String],
  releaseDate: Date,
  director: String,
  actors: [String],
});

export default model<Movie>('Movie', movieSchema);
