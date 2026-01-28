import mongoose, { Schema, Document, Model } from 'mongoose';
import type { OptionType, QuestionType, QuizType } from "@/lib/data/types"
interface IOption {
    option: string;
    isCorrect: boolean;
    weight: number;
}

interface IQuestion {
    id: string;
    statement: string;
    isMultiCorrect: boolean;
    options: IOption[];
    maxMarks: number;
    difficulty?: 'easy' | 'medium' | 'hard';
}

export interface IQuiz extends Document {
    id: string;
    title: string;
    description: string;
    questions: IQuestion[];
    maxMarks: number;
    allowedRetries: number;
    minScoreToPass: number;
    createdBy: mongoose.Types.ObjectId;
    createdAt: Date;
    updatedAt: Date;
}

const OptionSchema = new Schema<IOption>(
    {
        option: {
            type: String,
            required: true,
        },
        isCorrect: {
            type: Boolean,
            required: true,
        },
        weight: {
            type: Number,
            required: true,
            min: 0,
            max: 1,
        },
    },
    { _id: false }
);

const QuestionSchema = new Schema<IQuestion>(
    {
        id: {
            type: String,
            required: true,
        },
        statement: {
            type: String,
            required: true,
        },
        isMultiCorrect: {
            type: Boolean,
            required: true,
            default: false,
        },
        options: {
            type: [OptionSchema],
            required: true,
            validate: {
                validator: function (v: IOption[]) {
                    return v.length >= 2;
                },
                message: 'A question must have at least 2 options',
            },
        },
        maxMarks: {
            type: Number,
            required: true,
            min: 1,
        },
        difficulty: {
            type: String,
            enum: ['easy', 'medium', 'hard'],
            default: 'medium',
        },
    },
    { _id: false }
);

const QuizSchema = new Schema<IQuiz>(
    {
        id: {
            type: String,
            required: true,
            unique: true,
            index: true,
        },
        title: {
            type: String,
            required: true,
            trim: true,
        },
        description: {
            type: String,
            required: true,
            trim: true,
        },
        questions: {
            type: [QuestionSchema],
            required: true,
            validate: {
                validator: function (v: IQuestion[]) {
                    return v.length >= 1;
                },
                message: 'A quiz must have at least 1 question',
            },
        },
        maxMarks: {
            type: Number,
            required: true,
            min: 1,
        },
        allowedRetries: {
            type: Number,
            required: true,
            min: 0,
            default: 3,
        },
        minScoreToPass: {
            type: Number,
            required: true,
            min: 0,
        },
        createdBy: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

// Custom validation to check minScoreToPass <= maxMarks
QuizSchema.path('minScoreToPass').validate(function (this: IQuiz, value: number) {
    return value <= this.maxMarks;
}, 'Minimum score to pass cannot exceed maximum marks');

const Quiz: Model<IQuiz> = mongoose.models.Quiz || mongoose.model<IQuiz>('Quiz', QuizSchema);

export default Quiz;