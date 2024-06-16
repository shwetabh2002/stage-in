import { Schema, model, Document } from 'mongoose';


export interface WishlistItem {
    _id: string;
    contentType: string;
    contentTitle: string;
    addedOn: Date;
}

export interface wishlist extends Document {
    id: string;
    userId: string;
    items: WishlistItem[];
}

const WishlistSchema = new Schema({
    userId: {
        type: String,
        required: true,
        unique: true
    },
    items: [{
        _id: { type: String},
        contentType: {
            type: String,
            required: true
        },
        contentTitle:{
            type: String,
            required: true
        },
        addedOn: {
            type: Date,
            default: Date.now()
        }
    }]
});

export default model<wishlist>('wishlist', WishlistSchema);