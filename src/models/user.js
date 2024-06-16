"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var userSchema = new mongoose_1.Schema({
    _id: { type: String },
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
exports.default = (0, mongoose_1.model)('User', userSchema);
