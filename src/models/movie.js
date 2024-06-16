"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var movieSchema = new mongoose_1.Schema({
    _id: { type: String },
    title: { type: String, required: true },
    description: String,
    genres: [String],
    releaseDate: Date,
    director: String,
    actors: [String],
});
exports.default = (0, mongoose_1.model)('Movie', movieSchema);
