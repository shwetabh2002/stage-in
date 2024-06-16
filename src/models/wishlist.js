"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var WishlistSchema = new mongoose_1.Schema({
    userId: {
        type: String,
        required: true,
        unique: true
    },
    items: [{
            _id: { type: String },
            contentType: {
                type: String,
                required: true
            },
            contentTitle: {
                type: String,
                required: true
            },
            addedOn: {
                type: Date,
                default: Date.now()
            }
        }]
});
exports.default = (0, mongoose_1.model)('wishlist', WishlistSchema);
