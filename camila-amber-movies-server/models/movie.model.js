import mongoose from "mongoose";

const Schema = mongoose.Schema;

const movieSchema = new Schema(
  {
    plot: { type: String, required: true },
    genres: { type: [String], required: true },
    runtime: { type: Number, required: true },
    cast: { type: [String], required: true },
    poster: { type: String },
    title: { type: String, required: true },
    fullplot: { type: String },
    languages: { type: [String] },
    released: { type: Date },
    directors: { type: [String], required: true },
    rated: { type: String, required: true },
    year: { type: Number, default: 0 },
    imdb: { type: Number, default: 0 },
    countries: { type: [String] },
    tomatoes: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const Movie = mongoose.model("Movie", movieSchema);

export default Movie;
