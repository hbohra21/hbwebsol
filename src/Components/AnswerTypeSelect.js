import React from 'react';

const AnswerTypeSelect = ({ value, onChange }) => {
    return (
        <div className='answerTypeSelectDiv'>
            <label className='answerTypeLabel'>
                <h3> Answer Type:</h3>
                <select
                    value={value}
                    onChange={onChange}
                    className='answerTypeSelect'
                >
                    <option value={null}>None</option>
                    <option value="Textarea">Textarea</option>
                    <option value="Number">Number</option>
                    <option value="Dropdown">Dropdown</option>
                    <option value="Radio">Radio</option>
                    <option value="Checkbox">Checkbox</option>
                    <option value="Slider">Slider</option>
                </select>
            </label>
        </div>
    );
};

export default AnswerTypeSelect;
