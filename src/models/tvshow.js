"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var tvShowSchema = new mongoose_1.Schema({
    _id: { type: String },
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
exports.default = (0, mongoose_1.model)('TVShow', tvShowSchema);
