export interface OptionType {
    id: string
    option: string,
    weight: number,
}

export interface QuestionType {
    id : string,
    statement : string,
    isMultiCorrect : boolean,
    options : OptionType[],
    //TODO: [OptionType,OptionType,OptionType,OptionType]
    maxMarks : number,
    difficuilty: 'easy' | 'medium' | 'hard'
}

export interface QuizType {
    id : string,
    title : string,
    description : string,
    questions : QuestionType[],
    maxMarks : number,
    allowedRetries : number,
    minScoreToPass : number
}