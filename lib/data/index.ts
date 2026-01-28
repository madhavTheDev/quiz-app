export type { OptionType, QuizType, QuestionType } from './types';

export const isAdmin = (email : string)  : boolean => {
    return (
        (email === 'jay.patel@unifyapps.com') 
        || (email === 'spam.madhav.dev@gmail.com')
    )
}