import React, { useState, useEffect } from 'react';
import QuestionInput from './QuestionInput';
import AnswerTypeSelect from './AnswerTypeSelect';
import DynamicFields from './DynamicFields';

const QuestionForm = () => {
    const [question, setQuestion] = useState('');
    const [answerType, setAnswerType] = useState('');
    const [fields, setFields] = useState([{}]);
    const [showAdd, setShowAdd] = useState(false);

    const handleInputChange = (e) => {
        setQuestion(e.target.value);
    };

    const handleAnswerTypeChange = (e) => {
        if (e.target.value == "None") {
            setShowAdd(false)
            setAnswerType(e.target.value);
            setFields([{}]);
        }
        else {
            setShowAdd(true)
            setAnswerType(e.target.value);
            setFields([{}]);
        }
    };

    const handleFieldChange = (index, fieldName, value) => {
        const updatedFields = [...fields];
        updatedFields[index][fieldName] = value;
        setFields(updatedFields);
    };

    const handleAddField = () => {
        setFields([...fields, {}]);
    };

    const handleRemoveField = (index) => {
        const updatedFields = [...fields];
        updatedFields.splice(index, 1);
        setFields(updatedFields);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!question || !answerType) {
            alert('Please fill in both question and answer type before submitting.');
            return;
        }

        const isEmpty = fields.some((field) => {
            return (
                (answerType === 'Number' && (!field.number || !field.min || !field.max || !field.step)) ||
                (answerType === 'Textarea' && (!field.number || !field.min || !field.max || !field.row)) ||
                (answerType === 'Dropdown' && !field.options) ||
                (answerType === 'Radio' && !field.radioOptions) ||
                (answerType === 'Checkbox' && !field.checkboxOptions) ||
                (answerType === 'Slider' && (!field.sliderRange || !field.min || !field.max))
            );
        });

        if (isEmpty) {
            alert('Please fill in all fields before submitting.');
        } else {
            alert('Submit Succesfully.');
            setQuestion('');
            setAnswerType('Text');
            setFields([{}]);
            setShowAdd(false);
            console.log('Question:', question);
            console.log('Answer Type:', answerType);
            console.log('Fields:', fields);
        }
    };





    return (
        <form onSubmit={handleSubmit}>
            <QuestionInput value={question} onChange={handleInputChange} />
            <AnswerTypeSelect value={answerType} onChange={handleAnswerTypeChange} />
            <DynamicFields
                answerType={answerType}
                fields={fields}
                onFieldChange={handleFieldChange}
                onAddField={handleAddField}
                onRemoveField={handleRemoveField}
                showAdd={showAdd}
            />
            <button type="submit" className='submitButton'>Submit</button>
        </form>
    );
};

export default QuestionForm;
