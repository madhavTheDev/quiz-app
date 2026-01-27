import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IUser extends Document {
    clerkId: string;
    email: string;
    username?: string;
    firstName?: string;
    lastName?: string;
    imageUrl?: string;
    quizAttempts: mongoose.Types.ObjectId[];
    createdAt: Date;
    updatedAt: Date;
}

const UserSchema = new Schema<IUser>(
    {
        clerkId: {
            type: String,
            required: true,
            unique: true,
            index: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        username: {
            type: String,
            trim: true,
        },
        firstName: {
            type: String,
            trim: true,
        },
        lastName: {
            type: String,
            trim: true,
        },
        imageUrl: {
            type: String,
        },
        quizAttempts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'QuizAttempt',
            },
        ],
    },
    {
        timestamps: true,
    }
);

// Prevent model recompilation in development
const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>('User', UserSchema);

export default User;