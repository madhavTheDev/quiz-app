import type { QuizType } from './types';
const quiz1: QuizType = {
    id: "quiz_001",
    title: "Introduction to Web Development",
    description: "Test your knowledge of HTML, CSS, and basic web concepts",
    questions: [
        {
            id: "q1_001",
            statement: "Which HTML tag is used to define an unordered list?",
            isMultiCorrect: false,
            options: [
                { option: "<ol>", isCorrect: false, weight: 0 },
                { option: "<ul>", isCorrect: true, weight: 1 },
                { option: "<list>", isCorrect: false, weight: 0 },
                { option: "<li>", isCorrect: false, weight: 0 }
            ],
            maxMarks: 5,
            difficuilty: "easy"
        },
        {
            id: "q1_002",
            statement: "Which CSS property is used to change the text color?",
            isMultiCorrect: false,
            options: [
                { option: "font-color", isCorrect: false, weight: 0 },
                { option: "text-color", isCorrect: false, weight: 0 },
                { option: "color", isCorrect: true, weight: 1 },
                { option: "background-color", isCorrect: false, weight: 0 }
            ],
            maxMarks: 5,
            difficuilty: "easy"
        },
        {
            id: "q1_003",
            statement: "Select all valid HTTP methods:",
            isMultiCorrect: true,
            options: [
                { option: "GET", isCorrect: true, weight: 0.33 },
                { option: "POST", isCorrect: true, weight: 0.33 },
                { option: "FETCH", isCorrect: false, weight: 0 },
                { option: "DELETE", isCorrect: true, weight: 0.34 }
            ],
            maxMarks: 10,
            difficuilty: "medium"
        },
        {
            id: "q1_004",
            statement: "What does CSS stand for?",
            isMultiCorrect: false,
            options: [
                { option: "Cascading Style Sheets", isCorrect: true, weight: 1 },
                { option: "Creative Style System", isCorrect: false, weight: 0 },
                { option: "Computer Style Sheets", isCorrect: false, weight: 0 },
                { option: "Colorful Style Syntax", isCorrect: false, weight: 0 }
            ],
            maxMarks: 5,
            difficuilty: "easy"
        },
        {
            id: "q1_005",
            statement: "Which attribute is used to provide alternative text for an image?",
            isMultiCorrect: false,
            options: [
                { option: "title", isCorrect: false, weight: 0 },
                { option: "alt", isCorrect: true, weight: 1 },
                { option: "src", isCorrect: false, weight: 0 },
                { option: "caption", isCorrect: false, weight: 0 }
            ],
            maxMarks: 5,
            difficuilty: "medium"
        }
    ],
    maxMarks: 30,
    allowedRetries: 3,
    minScoreToPass: 18
};

const quiz2: QuizType = {
    id: "quiz_002",
    title: "Python Programming Fundamentals",
    description: "Assess your understanding of Python syntax and core concepts",
    questions: [
        {
            id: "q2_001",
            statement: "Which keyword is used to define a function in Python?",
            isMultiCorrect: false,
            options: [
                { option: "function", isCorrect: false, weight: 0 },
                { option: "def", isCorrect: true, weight: 1 },
                { option: "func", isCorrect: false, weight: 0 },
                { option: "define", isCorrect: false, weight: 0 }
            ],
            maxMarks: 4,
            difficuilty: "easy"
        },
        {
            id: "q2_002",
            statement: "Select all mutable data types in Python:",
            isMultiCorrect: true,
            options: [
                { option: "list", isCorrect: true, weight: 0.33 },
                { option: "tuple", isCorrect: false, weight: 0 },
                { option: "dictionary", isCorrect: true, weight: 0.33 },
                { option: "set", isCorrect: true, weight: 0.34 }
            ],
            maxMarks: 8,
            difficuilty: "medium"
        },
        {
            id: "q2_003",
            statement: "What will be the output of: print(type([]))?",
            isMultiCorrect: false,
            options: [
                { option: "<class 'array'>", isCorrect: false, weight: 0 },
                { option: "<class 'list'>", isCorrect: true, weight: 1 },
                { option: "<class 'tuple'>", isCorrect: false, weight: 0 },
                { option: "<class 'dict'>", isCorrect: false, weight: 0 }
            ],
            maxMarks: 6,
            difficuilty: "medium"
        },
        {
            id: "q2_004",
            statement: "Which operator is used for exponentiation in Python?",
            isMultiCorrect: false,
            options: [
                { option: "^", isCorrect: false, weight: 0 },
                { option: "**", isCorrect: true, weight: 1 },
                { option: "exp()", isCorrect: false, weight: 0 },
                { option: "//", isCorrect: false, weight: 0 }
            ],
            maxMarks: 4,
            difficuilty: "easy"
        },
        {
            id: "q2_005",
            statement: "Select all correct ways to create a string in Python:",
            isMultiCorrect: true,
            options: [
                { option: "Using single quotes: 'hello'", isCorrect: true, weight: 0.33 },
                { option: "Using double quotes: \"hello\"", isCorrect: true, weight: 0.33 },
                { option: "Using triple quotes: '''hello'''", isCorrect: true, weight: 0.34 },
                { option: "Using backticks: `hello`", isCorrect: false, weight: 0 }
            ],
            maxMarks: 8,
            difficuilty: "easy"
        }
    ],
    maxMarks: 30,
    allowedRetries: 2,
    minScoreToPass: 20
};

const quiz3: QuizType = {
    id: "quiz_003",
    title: "Database Design Principles",
    description: "Evaluate your knowledge of relational databases and SQL",
    questions: [
        {
            id: "q3_001",
            statement: "What does ACID stand for in database transactions?",
            isMultiCorrect: false,
            options: [
                { option: "Atomicity, Consistency, Isolation, Durability", isCorrect: true, weight: 1 },
                { option: "Authentication, Compatibility, Integration, Design", isCorrect: false, weight: 0 },
                { option: "Access, Control, Identity, Database", isCorrect: false, weight: 0 },
                { option: "Automatic, Concurrent, Indexed, Distributed", isCorrect: false, weight: 0 }
            ],
            maxMarks: 6,
            difficuilty: "medium"
        },
        {
            id: "q3_002",
            statement: "Which SQL clause is used to filter records?",
            isMultiCorrect: false,
            options: [
                { option: "FILTER", isCorrect: false, weight: 0 },
                { option: "WHERE", isCorrect: true, weight: 1 },
                { option: "HAVING", isCorrect: false, weight: 0 },
                { option: "SELECT", isCorrect: false, weight: 0 }
            ],
            maxMarks: 4,
            difficuilty: "easy"
        },
        {
            id: "q3_003",
            statement: "Select all types of database joins:",
            isMultiCorrect: true,
            options: [
                { option: "INNER JOIN", isCorrect: true, weight: 0.25 },
                { option: "LEFT JOIN", isCorrect: true, weight: 0.25 },
                { option: "RIGHT JOIN", isCorrect: true, weight: 0.25 },
                { option: "OUTER JOIN", isCorrect: true, weight: 0.25 }
            ],
            maxMarks: 10,
            difficuilty: "hard"
        },
        {
            id: "q3_004",
            statement: "What is a primary key used for?",
            isMultiCorrect: false,
            options: [
                { option: "To encrypt database records", isCorrect: false, weight: 0 },
                { option: "To uniquely identify each record in a table", isCorrect: true, weight: 1 },
                { option: "To sort records alphabetically", isCorrect: false, weight: 0 },
                { option: "To create backup copies", isCorrect: false, weight: 0 }
            ],
            maxMarks: 5,
            difficuilty: "easy"
        },
        {
            id: "q3_005",
            statement: "Which normalization form eliminates transitive dependencies?",
            isMultiCorrect: false,
            options: [
                { option: "First Normal Form (1NF)", isCorrect: false, weight: 0 },
                { option: "Second Normal Form (2NF)", isCorrect: false, weight: 0 },
                { option: "Third Normal Form (3NF)", isCorrect: true, weight: 1 },
                { option: "Fourth Normal Form (4NF)", isCorrect: false, weight: 0 }
            ],
            maxMarks: 5,
            difficuilty: "hard"
        }
    ],
    maxMarks: 30,
    allowedRetries: 2,
    minScoreToPass: 21
};

export const QUIZARRAY : QuizType[]= [
    quiz1,quiz2,quiz3
];
export type {OptionType,QuizType,QuestionType} from './types'