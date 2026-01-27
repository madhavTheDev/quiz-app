import mongoose, { Schema, Document, Model } from 'mongoose';

interface IAnswer {
    questionId: string;
    selectedOptions: string[]; // For both single and multi-correct
    isCorrect: boolean;
    marksObtained: number;
}

export interface IQuizAttempt extends Document {
    userId: mongoose.Types.ObjectId;
    quizId: mongoose.Types.ObjectId;
    answers: IAnswer[];
    totalScore: number;
    maxScore: number;
    percentage: number;
    isPassed: boolean;
    attemptNumber: number;
    startedAt: Date;
    submittedAt?: Date;
    timeTaken?: number; // in seconds
    createdAt: Date;
    updatedAt: Date;
}

const AnswerSchema = new Schema<IAnswer>(
    {
        questionId: {
            type: String,
            required: true,
        },
        selectedOptions: {
            type: [String],
            required: true,
        },
        isCorrect: {
            type: Boolean,
            required: true,
        },
        marksObtained: {
            type: Number,
            required: true,
            min: 0,
        },
    },
    { _id: false }
);

const QuizAttemptSchema = new Schema<IQuizAttempt>(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
            index: true,
        },
        quizId: {
            type: Schema.Types.ObjectId,
            ref: 'Quiz',
            required: true,
            index: true,
        },
        answers: {
            type: [AnswerSchema],
            required: true,
        },
        totalScore: {
            type: Number,
            required: true,
            min: 0,
        },
        maxScore: {
            type: Number,
            required: true,
            min: 0,
        },
        percentage: {
            type: Number,
            required: true,
            min: 0,
            max: 100,
        },
        isPassed: {
            type: Boolean,
            required: true,
        },
        attemptNumber: {
            type: Number,
            required: true,
            min: 1,
        },
        startedAt: {
            type: Date,
            required: true,
            default: Date.now,
        },
        submittedAt: {
            type: Date,
        },
        timeTaken: {
            type: Number, // seconds
            min: 0,
        },
    },
    {
        timestamps: true,
    }
);

// Compound index for user quiz attempts
QuizAttemptSchema.index({ userId: 1, quizId: 1 });

const QuizAttempt: Model<IQuizAttempt> =
    mongoose.models.QuizAttempt || mongoose.model<IQuizAttempt>('QuizAttempt', QuizAttemptSchema);

export default QuizAttempt;