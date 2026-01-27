'use client'

import Form from '@rjsf/core'
import validator from '@rjsf/validator-ajv8'
import { RJSFSchema, UiSchema } from '@rjsf/utils'
import { OptionType } from '@/lib/data'

interface WrapperProps {
    options: OptionType[]
    isMultiCorrect: boolean
    onSubmit?: (data: any) => void
    onChange?: (data: any) => void
}

export const QuestionWrapper = ({ options, isMultiCorrect, onSubmit, onChange }: WrapperProps) => {
    // Schema for multi-select (checkboxes)
    const multiCorrectSchema: RJSFSchema = {
        type: 'object',
        properties: {
            selectedOptions: {
                type: 'array',
                title: 'Select all that apply',
                items: {
                    type: 'string',
                    enum: options.map(opt => opt.option),
                },
                uniqueItems: true,
            },
        },
    }

    // Schema for single-select (radio buttons)
    const singleCorrectSchema: RJSFSchema = {
        type: 'object',
        properties: {
            selectedOption: {
                type: 'string',
                title: 'Select one option',
                enum: options.map(opt => opt.option),
            },
        },
    }

    // UI Schema for multi-select
    const multiCorrectUiSchema: UiSchema = {
        selectedOptions: {
            'ui:widget': 'checkboxes',
            'ui:options': {
                inline: false,
            },
        },
    }

    // UI Schema for single-select
    const singleCorrectUiSchema: UiSchema = {
        selectedOption: {
            'ui:widget': 'radio',
            'ui:options': {
                inline: false,
            },
        },
    }

    const handleSubmit = ({ formData }: any) => {
        if (onSubmit) {
            onSubmit(formData)
        }
    }

    const handleChange = ({ formData }: any) => {
        if (onChange) {
            onChange(formData)
        }
    }

    return (
        <div className="w-full">
            <Form
                schema={isMultiCorrect ? multiCorrectSchema : singleCorrectSchema}
                uiSchema={isMultiCorrect ? multiCorrectUiSchema : singleCorrectUiSchema}
                validator={validator}
                onSubmit={handleSubmit}
                onChange={handleChange}
            >
                {/* Hide submit button if you want to handle submission elsewhere */}
                <button type="submit" className="hidden" />
            </Form>
        </div>
    )
}