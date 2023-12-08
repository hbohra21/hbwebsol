import React from 'react';

const QuestionInput = ({ value, onChange }) => {
    return (
        <div className='questionInputDiv'>
            <label className='questionLabel'>
                <h3> Question:</h3>
                <input
                    type="text"
                    value={value}
                    onChange={onChange}
                    className='questionInput'
                    placeholder='Write question here'
                />
            </label>
        </div>
    );
};

export default QuestionInput;
