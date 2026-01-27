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
                { option: "<ol>",id : "1", weight: 0 },
                { option: "<ul>",id : "2", weight: 1 },
                { option: "<list>",id : "3", weight: 0 },
                { option: "<li>",id : "4", weight: 0 }
            ],
            maxMarks: 5,
            difficuilty: "easy"
        },
        {
            id: "q1_002",
            statement: "Which CSS property is used to change the text color?",
            isMultiCorrect: false,
            options: [
                { option: "font-color",id : "1", weight: 0 },
                { option: "text-color",id : "1", weight: 0 },
                { option: "color",id : "1", weight: 1 },
                { option: "background-color",id : "1", weight: 0 }
            ],
            maxMarks: 5,
            difficuilty: "easy"
        },
        {
            id: "q1_003",
            statement: "Select all valid HTTP methods:",
            isMultiCorrect: true,
            options: [
                { option: "GET",id : "1", weight: 0.33 },
                { option: "POST",id : "1", weight: 0.33 },
                { option: "FETCH",id : "1", weight: 0 },
                { option: "DELETE",id : "1", weight: 0.34 }
            ],
            maxMarks: 10,
            difficuilty: "medium"
        },
        {
            id: "q1_004",
            statement: "What does CSS stand for?",
            isMultiCorrect: false,
            options: [
                { option: "Cascading Style Sheets",id : "1", weight: 1 },
                { option: "Creative Style System",id : "1", weight: 0 },
                { option: "Computer Style Sheets",id : "1", weight: 0 },
                { option: "Colorful Style Syntax",id : "1", weight: 0 }
            ],
            maxMarks: 5,
            difficuilty: "easy"
        },
        {
            id: "q1_005",
            statement: "Which attribute is used to provide alternative text for an image?",
            isMultiCorrect: false,
            options: [
                { option: "title",id : "1", weight: 0 },
                { option: "alt",id : "1", weight: 1 },
                { option: "src",id : "1", weight: 0 },
                { option: "caption",id : "1", weight: 0 }
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
                { option: "function",id : "1", weight: 0 },
                { option: "def",id : "1", weight: 1 },
                { option: "func",id : "1", weight: 0 },
                { option: "define",id : "1", weight: 0 }
            ],
            maxMarks: 4,
            difficuilty: "easy"
        },
        {
            id: "q2_002",
            statement: "Select all mutable data types in Python:",
            isMultiCorrect: true,
            options: [
                { option: "list",id : "1", weight: 0.33 },
                { option: "tuple",id : "1", weight: 0 },
                { option: "dictionary",id : "1", weight: 0.33 },
                { option: "set",id : "1", weight: 0.34 }
            ],
            maxMarks: 8,
            difficuilty: "medium"
        },
        {
            id: "q2_003",
            statement: "What will be the output of: print(type([]))?",
            isMultiCorrect: false,
            options: [
                { option: "<class 'array'>",id : "1", weight: 0 },
                { option: "<class 'list'>",id : "1", weight: 1 },
                { option: "<class 'tuple'>",id : "1", weight: 0 },
                { option: "<class 'dict'>",id : "1", weight: 0 }
            ],
            maxMarks: 6,
            difficuilty: "medium"
        },
        {
            id: "q2_004",
            statement: "Which operator is used for exponentiation in Python?",
            isMultiCorrect: false,
            options: [
                { option: "^",id : "1", weight: 0 },
                { option: "**",id : "1", weight: 1 },
                { option: "exp()",id : "1", weight: 0 },
                { option: "//",id : "1", weight: 0 }
            ],
            maxMarks: 4,
            difficuilty: "easy"
        },
        {
            id: "q2_005",
            statement: "Select all correct ways to create a string in Python:",
            isMultiCorrect: true,
            options: [
                { option: "Using single quotes: 'hello'",id : "1", weight: 0.33 },
                { option: "Using double quotes: \"hello\"",id : "1", weight: 0.33 },
                { option: "Using triple quotes: '''hello'''",id : "1", weight: 0.34 },
                { option: "Using backticks: `hello`",id : "1", weight: 0 }
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
                { option: "Atomicity, Consistency, Isolation, Durability",id : "1", weight: 1 },
                { option: "Authentication, Compatibility, Integration, Design",id : "1", weight: 0 },
                { option: "Access, Control, Identity, Database",id : "1", weight: 0 },
                { option: "Automatic, Concurrent, Indexed, Distributed",id : "1", weight: 0 }
            ],
            maxMarks: 6,
            difficuilty: "medium"
        },
        {
            id: "q3_002",
            statement: "Which SQL clause is used to filter records?",
            isMultiCorrect: false,
            options: [
                { option: "FILTER",id : "1", weight: 0 },
                { option: "WHERE",id : "1", weight: 1 },
                { option: "HAVING",id : "1", weight: 0 },
                { option: "SELECT",id : "1", weight: 0 }
            ],
            maxMarks: 4,
            difficuilty: "easy"
        },
        {
            id: "q3_003",
            statement: "Select all types of database joins:",
            isMultiCorrect: true,
            options: [
                { option: "INNER JOIN",id : "1", weight: 0.25 },
                { option: "LEFT JOIN",id : "1", weight: 0.25 },
                { option: "RIGHT JOIN",id : "1", weight: 0.25 },
                { option: "OUTER JOIN",id : "1", weight: 0.25 }
            ],
            maxMarks: 10,
            difficuilty: "hard"
        },
        {
            id: "q3_004",
            statement: "What is a primary key used for?",
            isMultiCorrect: false,
            options: [
                { option: "To encrypt database records",id : "1", weight: 0 },
                { option: "To uniquely identify each record in a table",id : "1", weight: 1 },
                { option: "To sort records alphabetically",id : "1", weight: 0 },
                { option: "To create backup copies",id : "1", weight: 0 }
            ],
            maxMarks: 5,
            difficuilty: "easy"
        },
        {
            id: "q3_005",
            statement: "Which normalization form eliminates transitive dependencies?",
            isMultiCorrect: false,
            options: [
                { option: "First Normal Form (1NF)",id : "1", weight: 0 },
                { option: "Second Normal Form (2NF)",id : "1", weight: 0 },
                { option: "Third Normal Form (3NF)",id : "1", weight: 1 },
                { option: "Fourth Normal Form (4NF)",id : "1", weight: 0 }
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